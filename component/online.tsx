import React from "react";
import { Col, Row } from "antd";

const Online: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#2f2f2f",
                height: "200px",
                color: "#ffffff",
                marginBottom: "20px",
            }}
        >
            <Row align="middle">
                <Col span={9} offset={3}>
                    <p
                        style={{
                            fontWeight: 600,
                            color: "#ffffff",
                            fontSize: "22px",
                        }}
                    >
                        Online Message
                    </p>
                    <p
                        style={{
                            color: "#bdbdbd",
                            fontSize: "18px",
                        }}
                    >
                        You can leave a message here or ask for product
                        information.
                    </p>
                </Col>
                <Col span={9} offset={3}>
                    <div
                        style={{
                            height: "200px",
                            textAlign: "center",
                            lineHeight: "200px",
                        }}
                    >
                        <a
                            style={{
                                padding: "10px 25px",
                                fontSize: "15px",
                                color: "#ffffff",
                                fontWeight: 600,
                                border: "2px solid #ffffff",
                                borderRadius: "3px",
                            }}
                        >
                            Submission Now!
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Online;
