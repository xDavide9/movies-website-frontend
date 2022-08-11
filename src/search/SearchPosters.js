import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Empty, Pagination, Typography, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./SearchPosters.css";

const { Paragraph } = Typography;

const SearchPosters = (props) => {
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://quentertain-backend.netlify.app/.netlify/functions/api/search/posters`,
      params: {
        query: props.query,
        language: props.language,
        minimumPopularity: props.minimumPopularity,
        page: page,
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
  }, [props.query, props.language, props.minimumPopularity, page]);

  useEffect(() => {
    setPage(1);
  }, [props.query]);

  if (!isSuccessfulRequest || results.length === 0)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="search-posters-failed-response-container"
      >
        <Empty style={{ margin: "50px 0" }} />
        <Paragraph className="search-posters-failed-response-paragraph">
          Enter the title of your favourite films!
        </Paragraph>
        <Pagination
          defaultCurrent={1}
          total={1}
          showSizeChanger={false}
          pageSize="1"
          current={page}
          style={{ margin: "20px 0", textAlign: "center" }}
          onChange={(value) => {
            setPage(value);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="search-posters-top-level-container"
    >
      <div className="search-posters-container">
        {results.map((result) => {
          return (
            <Link to={`/search/${result.id}/${props.language}`}>
              <div className="search-posters-wrapper">
                <img
                  className="search-poster"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt="poster"
                />
                <Typography className="search-poster-content search-poster-fade">
                  Preview <EyeOutlined />
                </Typography>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        total={1}
        showSizeChanger={false}
        pageSize="1"
        current={page}
        style={{ margin: "20px 0", textAlign: "center" }}
        onChange={(value) => {
          setPage(value);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </motion.div>
  );
};

export default SearchPosters;
