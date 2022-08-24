import styles from "./CustomLayout.module.css";
import { Layout, Menu } from "antd";
import {
  ArrowRightOutlined,
  DoubleRightOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              label: "Home",
              key: "/",
              icon: <HomeOutlined />,
              onClick: () => {
                props.navigate("/");
              },
            },
            {
              label: "Discover",
              key: "/discover",
              icon: <DoubleRightOutlined />,
              onClick: () => {
                props.navigate("/discover");
              },
            },
            {
              label: "Search",
              key: "/search",
              icon: <ArrowRightOutlined />,
              onClick: () => {
                props.navigate("/search");
              },
            },
          ]}
          selectedKeys={[props.location.pathname]}
        />
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.footer}>2022 Quentertain & TMDb.</Footer>
    </Layout>
  );
};

export default CustomLayout;
