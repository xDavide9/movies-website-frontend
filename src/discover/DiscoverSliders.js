import styles from "./DiscoverSliders.module.css";
import "./slider.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import settings from "./slider";
import { Select } from "antd";

import Slider from "react-slick";

const { Text, Title } = Typography;
const { Option } = Select;

const DiscoverSliders = (props) => {
  const [popularResults, setPopularResults] = useState([]);
  const [year, setYear] = useState(2008);
  const [yearResults, setYearResults] = useState([]);
  const [genre, setGenre] = useState(28); // action
  const [genreList, setGenreList] = useState([{ id: -1, name: "NA" }]);
  const [genreResults, setGenreResults] = useState([]);

  const years = [];
  for (let i = 1888; i < new Date().getFullYear() + 1; i++) {
    years.push(i);
  }

  useEffect(() => {
    // most popular films
    axios
      .request({
        method: "GET",
        url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/popular`,
        params: {
          language: `${props.language}`,
        },
      })
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
          language: `${props.language}`,
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
    axios
      .request({
        url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/genre`,
        method: "GET",
        params: {
          genre: genre,
          language: `${props.language}`,
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

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/config/genres`
      )
      .then((res) => {
        setGenreList(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div className={styles.flex}>
        <Title level={3} className={styles.title}>
          From Year
        </Title>
        <Select defaultValue="2008" onChange={(value) => setYear(value)}>
          {years.map((year) => {
            return <Option value={year}>{year}</Option>;
          })}
        </Select>
      </div>
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
      <div className={styles.flex}>
        <Title level={3} className={styles.title}>
          With Genre
        </Title>
        <Select defaultValue={28} onChange={(value) => setGenre(value)}>
          {genreList.map((genre) => (
            <Option value={genre.id}>{genre.name}</Option>
          ))}
        </Select>
      </div>
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
