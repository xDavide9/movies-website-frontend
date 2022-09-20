import { Empty, Row, Typography } from "antd";
import { Helmet } from "react-helmet";

const { Title, Paragraph } = Typography;

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta
          name="description"
          content="The page you request was not found."
        />
      </Helmet>
      <Row align="center" style={{ paddingTop: "10%" }}>
        <Title style={{ fontSize: "5em" }}>ERROR 404</Title>
      </Row>
      <Row align="center">
        <Paragraph style={{ fontSize: "3em" }}>
          The page you requested was not found.
        </Paragraph>
      </Row>
      <Row align="center">
        <Empty style={{ fontSize: "1.5em" }} />
      </Row>
    </>
  );
};

export default ErrorPage;
