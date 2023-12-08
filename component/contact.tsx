import React from "react";
import { Col, Row } from "antd";
import {
    TwitterOutlined,
    FacebookOutlined,
    GooglePlusOutlined,
    LinkedinOutlined,
    SkypeOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
} from "@ant-design/icons";

const Contact: React.FC = () => {
    return (
        <Row>
            <Col span={5} offset={1}>
                <div
                    style={{
                        textAlign: "center",
                        color: "#2f2f2f",
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                >
                    website logo
                </div>
                <div style={{ textAlign: "center" }}>
                    <TwitterOutlined
                        style={{
                            fontSize: "25px",
                            margin: "10px",
                            color: "#cccccc",
                        }}
                    />
                    <FacebookOutlined
                        style={{
                            fontSize: "25px",
                            margin: "10px",
                            color: "#cccccc",
                        }}
                    />
                    <GooglePlusOutlined
                        style={{
                            fontSize: "25px",
                            margin: "10px",
                            color: "#cccccc",
                        }}
                    />
                    <LinkedinOutlined
                        style={{
                            fontSize: "25px",
                            margin: "10px",
                            color: "#cccccc",
                        }}
                    />
                    <SkypeOutlined
                        style={{
                            fontSize: "25px",
                            margin: "10px",
                            color: "#cccccc",
                        }}
                    />
                </div>
            </Col>
            <Col span={5} offset={1} style={{ color: "#808080" }}>
                <div
                    style={{
                        color: "#2f2f2f",
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                >
                    CONTACT US
                </div>
                <Row style={{ margin: "10px 0px" }}>
                    <Col span={3}>
                        <EnvironmentOutlined />
                    </Col>
                    <Col>
                        <div style={{ width: "260px" }}>
                            FL.1, BLOCK3, HONGFAJIATELI HIGH-TECH PARK, SHIYAN
                            TOWN, BAO'AN DISTRICT, SHENZHEN, CHINA, 518108
                        </div>
                    </Col>
                </Row>
                <Row style={{ margin: "10px 0px" }}>
                    <Col span={3}>
                        <MailOutlined />
                    </Col>
                    <Col>service@website.com</Col>
                </Row>
                <Row style={{ margin: "10px 0px" }}>
                    <Col span={3}>
                        <PhoneOutlined />
                    </Col>
                    <Col>+86 755 88888888</Col>
                </Row>
            </Col>
            <Col span={5} offset={1}>
                <div
                    style={{
                        color: "#2f2f2f",
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                >
                    QUICK LINKS
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a className="a_hover">Service</a>
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a className="a_hover">FAQ</a>
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a style={{ color: "#808080" }}>About Us</a>
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a style={{ color: "#808080" }}>Privacy Policy</a>
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a style={{ color: "#808080" }}>Support</a>
                </div>
                <div style={{ margin: "10px 0px" }}>
                    <a style={{ color: "#808080" }}>Contact Us</a>
                </div>
            </Col>
            <Col span={5} offset={1}>
                <div
                    style={{
                        color: "#2f2f2f",
                        fontSize: "18px",
                        fontWeight: 700,
                    }}
                >
                    LATEST NEWS
                </div>
            </Col>
        </Row>
    );
};

export default Contact;
