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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
              <Link to={`/discover/${result.id}/${props.language}`}>
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
