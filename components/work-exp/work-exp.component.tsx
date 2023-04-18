import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import data from "./work-exp.json";

export const WorkExp = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="flex flex-col my-20 pb-20 w-full 2xl:max-w-screen-2xl">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-10 text-primaryColor font-bold">
                Work Experience
            </h2>
            <div className="lg:flex lg:gap-20 relative">
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Work experience"
                    className="lg:w-1/3 2xl:w-48 relative"
                >
                    {data.map((obj, idx) => {
                        return (
                            <Tab
                                key={idx}
                                label={obj.company}
                                {...a11yProps(idx)}
                                className="flex items-start font-sans"
                            />
                        );
                    })}
                </Tabs>
                {data.map((obj, idx) => {
                    return (
                        <TabPanel key={idx} value={value} index={idx}>
                            <div className="flex flex-col gap-2 2xl:w-3/5 font-sans">
                                <p className="text-xl text-primaryColor">
                                    {obj.title}
                                </p>
                                <p className="text-lighterBlack text-sm">
                                    {obj.dates}
                                </p>
                                <div className="flex flex-col gap-4 text-lighterBlack 2xl:h-64">
                                    {obj.experience.map((exp, expIdx) => {
                                        return <p key={expIdx}>{exp}</p>;
                                    })}
                                </div>
                            </div>
                        </TabPanel>
                    );
                })}
            </div>
        </div>
    );
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            className="my-6 lg:my-0"
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
