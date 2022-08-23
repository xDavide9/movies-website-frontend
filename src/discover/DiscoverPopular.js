import "./DiscoverPopular.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";

const { Paragraph } = Typography;

const DiscoverPopular = (props) => {
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_HTTP_REQUESTS_BASE}/.netlify/functions/api/discover/popular`,
      params: {
        query: props.query,
        language: props.language,
        minimumPopularity: props.minimumPopularity,
        page: page,
      },
    };
  });

  return <div id="discover-popular-container">Popular</div>;
};

export default DiscoverPopular;
