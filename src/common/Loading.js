import styles from "./Loading.module.css";
import {Space, Spin, Typography} from "antd";

const {Text} = Typography;

const Loading = () => {
    return (
        <div className={`${styles.marginTop} ${styles.flex}`}>
            <Space size="middle">
                <Text className={styles.loading}>Loading</Text>
                <Spin size="large"/>
            </Space>
        </div>
    )
}

export default Loading;