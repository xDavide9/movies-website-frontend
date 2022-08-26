import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Empty, notification, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styles from "./SearchPosters.module.css";

const { Text } = Typography;

const SearchPosters = (props) => {
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/search/posters`,
      params: {
        query: props.query,
        language: props.language,
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
        setSuccessfulRequest(true);
      })
      .catch((err) => {
        notification.error({
          message: `Error ${err.response.status}`,
          description: (
            <>
              {err.message} <br /> {err.response.data}
            </>
          ),
        });
        console.log(err);
        setSuccessfulRequest(false);
      });
  }, [props.query, props.language]);

  if (!isSuccessfulRequest || results.length === 0)
    return (
      <motion.div className={styles.failedResponseContainer}>
        <Empty style={{ margin: "50px 0" }} />
      </motion.div>
    );

  return (
    <motion.div className={styles.topLevelContainer}>
      <div className={styles.container}>
        {results.map((result) => {
          return (
            <Link to={`/search/${result.id}/${props.language}`}>
              <div className={styles.wrapper}>
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt="poster"
                />
                <Text className={`${styles.content} ${styles.fade}`}>
                  Preview <EyeOutlined />
                </Text>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SearchPosters;
