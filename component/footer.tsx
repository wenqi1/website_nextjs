"use client";

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

const Footer: React.FC = () => {
    return (
        <div
            style={{
                textAlign: "center",
                color: "#888888",
                borderTop: "1px solid #e0e0e0",
                padding: "12px",
                fontSize: "14px",
            }}
        >
            Copyright ©2005 - 2019 Shenzhen Logo Lighting Co.,LTD.
        </div>
    );
};

export default Footer;
