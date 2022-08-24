import styles from "./DiscoverCommon.module.css";
import "./CustomSlider.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";

import Slider from "react-slick";

const { Text, Title } = Typography;

const DiscoverPopular = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/popular`
      )
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
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
      });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <div>
      <Title level={3} className={styles.title}>
        Most Popular
      </Title>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverPopular;
