import styles from "./DiscoverSliders.module.css";
import "./slider.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import settings from "./slider";

import Slider from "react-slick";

const { Text, Title } = Typography;

const DiscoverSliders = (props) => {
  const [popularResults, setPopularResults] = useState([]);
  const [year, setYear] = useState(2008);
  const [yearResults, setYearResults] = useState([]);
  const [genre, setGenre] = useState(28); // action
  const [genreResults, setGenreResults] = useState([]);

  useEffect(() => {
    // most popular films
    axios
      .get(
        `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/popular`
      )
      .then((res) => {
        console.log(res);
        setPopularResults(res.data.results);
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
  }, []);

  useEffect(() => {
    // from year films
    axios
      .request({
        url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/year`,
        method: "GET",
        params: {
          year: year,
        },
      })
      .then((res) => {
        console.log(res);
        setYearResults(res.data.results);
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
  }, [year]);

  useEffect(() => {
    // with genre films
    // 28 action
    // 12 adventure
    // 16 animation
    // 35 comedy
    // 80 crime
    // 99 documentary
    // 18 drama
    // 10751 family
    // 14 fantasy
    // 36 history
    // 27 horror
    // 10402 music
    // 9648 mystery
    // 10749 romance
    // 878 science fiction
    // 10770 tv movie
    // 53 thriller
    // 10752 war
    // 37 western
    axios
      .request({
        url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/genre`,
        method: "GET",
        params: {
          genre: genre,
        },
      })
      .then((res) => {
        console.log(res);
        setGenreResults(res.data.results);
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
  }, [genre]);

  return (
    <div className={styles.topLevelContainer}>
      <Title level={3} className={styles.title}>
        Most Popular
      </Title>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {popularResults.map((result) => {
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
      <Title level={3} className={styles.title}>
        From Year {year}
      </Title>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {yearResults.map((result) => {
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
      <Title level={3} className={styles.title}>
        With Genre {genre}
      </Title>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {genreResults.map((result) => {
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

export default DiscoverSliders;
