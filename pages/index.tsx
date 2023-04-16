import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";

import LandingImage from "../public/images/linkedin.jpg";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Noel Codes | Home Page</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="author" content="Noel Codes" />
                <meta
                    name="description"
                    content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
                />
                <meta
                    name="og:description"
                    content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
                />
                <meta name="og:image" content={LandingImage.src} />
                <meta name="twitter:url" content="https://noelcodes.dev/" />
                <meta name="twitter:title" content="Noel Codes | Home Page" />
                <meta
                    name="twitter:description"
                    content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
                />
                <meta name="twitter:image" content={LandingImage.src} />
                <html lang="en-us" />
            </Head>
            <Layout>
                <Header />
                <div className="mt-20 flex flex-col">
                    <h2 className="text-2xl mb-4 text-primaryColor font-bold">
                        Work Experience
                    </h2>
                    <div className="flex flex-col gap-10"></div>
                </div>
                <VerticalTabs />
            </Layout>
        </>
    );
};

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            className="my-6"
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
    };
}

export function VerticalTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="Work experience"
            >
                {/* bg-lighterBlack bg-opacity-5 */}
                <Tab
                    label="Clover"
                    {...a11yProps(0)}
                    className="flex items-start font-sans"
                />
                <Tab
                    label="Microsoft"
                    {...a11yProps(1)}
                    className="flex items-start font-sans"
                />
                <Tab
                    label="Catchafire"
                    {...a11yProps(2)}
                    className="flex items-start font-sans"
                />
            </Tabs>
            {/* </Box> */}

            <TabPanel value={value} index={0}>
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-primaryColor">
                        Software Engineer
                    </p>
                    <p className="text-lighterBlack text-sm">
                        October 2022 - Present
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Implemented panels and dashboards to present information like failed requests, log messages and latency which resulted in reduction of time spent searching logs by 20% using Grafana."
                        }
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Designed and implemented a self-documented REST API which resulted in an increase of speed in testing the codebase using java, spring boot and open api."
                        }
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Optimized a microservice’s daily upload of millions of events such as successful/unsuccessful logins, downtime and other important data by 15% using spring boot and data jpa. "
                        }
                    </p>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-primaryColor">
                        Software Engineer Apprentice
                    </p>
                    <p className="text-lighterBlack text-sm">
                        February 2022 - June 2022.
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Implemented authentication and authorization to an asp.net core 5 api which resulted in an increase in the security of it using JWT tokens and session."
                        }
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Implemented telemetry to an application that resulted in making logs and metrics thatdisplayed downtimes, latency, failed responses and others available using internal libraries."
                        }
                    </p>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-primaryColor">
                        Web Developer Volunteer
                    </p>
                    <p className="text-lighterBlack text-sm">
                        July 2021 - January 2022.
                    </p>
                    <p className="text-lighterBlack">
                        {
                            "- Developed and designed websites for nonprofits businesses that resulted in saving them over $15,000 by using HTML, CSS, JavaScript and WordPress."
                        }
                    </p>
                </div>
            </TabPanel>
        </div>
    );
}

export default Home;
