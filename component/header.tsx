"use client";

import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Row, Col } from "antd";
import Link from "next/link";

const Header: React.FC = () => {

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        
    };

    const aboutMenu: MenuProps = {
        items: [
            {
                label: "About Us",
                key: "about-us",
            },
            {
                label: "Company Equipment",
                key: "company-equipment",
            },
            {
                label: "Honer",
                key: "honer",
            },
            {
                label: "Company News",
                key: "company-news",
            },
            {
                label: "Video Center",
                key: "video-center",
            },
        ],
        onClick: handleMenuClick,
    };

    const customerMenu: MenuProps = {
        items: [
            {
                label: "Customer Case",
                key: "customer-case",
            },
            {
                label: "Customer Feedback",
                key: "customer-feedback",
            },
            {
                label: "Support To Distributor",
                key: "support-to-distributor",
            },
        ],
        onClick: handleMenuClick,
    };

    const supportMenu: MenuProps = {
        items: [
            {
                label: "Download",
                key: "download",
            },
            {
                label: "Technical Support",
                key: "technical-support",
            },
            {
                label: "FAQ",
                key: "faq",
            },
            {
                label: "Warranty Policy",
                key: "warranty-policy",
            },
        ],
        onClick: handleMenuClick,
    };

    const contactMenu: MenuProps = {
        items: [
            {
                label: "Company Name",
                key: "company-name",
            },
            {
                label: "Join Company",
                key: "join-company",
            },
            {
                label: "Online Messages",
                key: "online-messages",
            },
        ],
        onClick: handleMenuClick,
    };

    const items: MenuProps["items"] = [
        {
            label: "About Us",
            key: "about-us",
        },
        {
            label: "Company Equipment",
            key: "company-equipment",
        },
        {
            label: "Honer",
            key: "honer",
        },
        {
            label: "Company News",
            key: "company-news",
        },
        {
            label: "Video Center",
            key: "video-center",
        },
    ];

    return (
        <div className="div-header">
            <Row align="middle">
                <Col span={3} offset={3}>
                    <p style={{ height: "50px", lineHeight: "50px" }}>
                        website logo
                    </p>
                </Col>
                <Col span={1} offset={1}>
                    <p>Home</p>
                </Col>
                <Col span={1} offset={1}>
                    <Dropdown menu={aboutMenu}>
                        <a
                            onClick={(e) => e.preventDefault()}
                            style={{ color: "#181818" }}
                        >
                            About
                        </a>
                    </Dropdown>
                </Col>
                <Col span={1} offset={1}>
                    <Link href="/product">Product</Link>
                </Col>
                <Col span={2} offset={1}>
                    <Dropdown menu={customerMenu}>
                        <a
                            onClick={(e) => e.preventDefault()}
                            style={{ color: "#181818" }}
                        >
                            Customer Center
                        </a>
                    </Dropdown>
                </Col>
                <Col span={1} offset={1}>
                    <Dropdown menu={supportMenu}>
                        <a
                            onClick={(e) => e.preventDefault()}
                            style={{ color: "#181818" }}
                        >
                            Support
                        </a>
                    </Dropdown>
                </Col>
                <Col span={1} offset={1}>
                    <Dropdown menu={contactMenu}>
                        <a
                            onClick={(e) => e.preventDefault()}
                            style={{ color: "#181818" }}
                        >
                            contact
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
