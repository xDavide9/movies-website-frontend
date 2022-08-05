import "./DiscoverInfo.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Empty,
  Typography,
  Image,
  Descriptions,
  Tooltip,
  notification,
} from "antd";
import { ClockCircleTwoTone } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Item } = Descriptions;

const DiscoverInfo = () => {
  const { id, language } = useParams();
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classy-sopapillas-5cb021.netlify.app/.netlify/functions/api/discover/info",
      params: { id: id, language: language },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res);
        setFilm(res.data);
        setGenres(res.data.genres);
        setCompanies(res.data.production_companies);
        setCountries(res.data.production_countries);
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
        setSuccessfulRequest(false);
      });
  }, [id, language]);

  if (isSuccessfulRequest)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="discover-info-top-level-container"
      >
        <div className="discover-info-flex-container">
          <div className="discover-info-flex-child-1">
            <Title id="discover-info-title">{film.title}</Title>
            <Paragraph id="discover-info-overview">
              {film.overview === "" ? <></> : film.overview}
            </Paragraph>
            <div className="discover-info-genre-runtime-container">
              {genres.length === 0 ? (
                <></>
              ) : (
                genres.map((genre) => (
                  <span className="discover-info-genre-item discover-info-genre-gradient">
                    {String(genre.name)}
                  </span>
                ))
              )}
              <Text id="discover-info-runtime">
                <ClockCircleTwoTone /> {~~(film.runtime / 60)}h{" "}
                {film.runtime % 60}m
              </Text>
            </div>
            <Descriptions bordered column={1} style={{ marginBottom: "20px" }}>
              <Item label="Status">{film.status}</Item>
              <Item label="Tagline">
                {film.tagline === "" ? <>N/A</> : film.tagline}
              </Item>
              <Item label="Homepage">
                {film.homepage === "" ? <>N/A</> : film.homepage}
              </Item>
              <Item label="Release Date">
                <Tooltip color="blue" title="yyyy-mm-dd">
                  {film.release_date === "" ? <>N/A</> : film.release_date}
                </Tooltip>
              </Item>
              <Item label="Popularity">{film.popularity.toFixed(2)}</Item>
              <Item label="Companies">
                {companies.length === 0 ? (
                  <>N/A</>
                ) : (
                  companies.map((company, index) =>
                    index !== companies.length - 1 ? (
                      <>{String(company.name) + ", "}</>
                    ) : (
                      <>{String(company.name)}</>
                    )
                  )
                )}
              </Item>
              <Item label="Countries">
                {countries.length === 0 ? (
                  <>N/A</>
                ) : (
                  countries.map((country, index) =>
                    index !== countries.length - 1 ? (
                      <>{String(country.name) + ", "}</>
                    ) : (
                      <>{String(country.name)}</>
                    )
                  )
                )}
              </Item>
              <Item label="Budget">
                {film.budget === 0 ? (
                  <>N/A</>
                ) : (
                  <>{(film.budget / 1_000_000).toFixed(0)} mln</>
                )}
              </Item>
              <Item label="Revenue">
                {film.revenue === 0 ? (
                  <>N/A</>
                ) : (
                  <>{(film.revenue / 1_000_000).toFixed(0)} mln</>
                )}
              </Item>
              <Item label="IMDB ID">
                <Tooltip color="blue" title="International Movie Database id">
                  {film.imdb_id === "" ? <>N/A</> : film.imdb_id}
                </Tooltip>
              </Item>
              <Item label="Original Language">
                {film.original_language === "" ? (
                  <>N/A</>
                ) : film.original_language === "en" ? (
                  <>English</>
                ) : (
                  film.original_language
                )}
              </Item>
              <Item label="Original Title">
                {film.original_title === "" ? <>N/A</> : film.original_title}
              </Item>
              <Item label="Vote Average">
                {film.vote_average === "" ? <>N/A</> : film.vote_average}
              </Item>
              <Item label="Vote Count">
                {film.vote_count === "" ? <>N/A</> : film.vote_count}
              </Item>
              <Item label="Adult Film">
                {film.adult === "" ? <>N/A</> : film.adult ? <>Yes</> : <>No</>}
              </Item>
            </Descriptions>
          </div>
          <div className="discover-info-flex-child-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt="poster"
            />
          </div>
        </div>
      </motion.div>
    );

  return <Empty style={{ margin: "20px" }} />;
};

export default DiscoverInfo;
