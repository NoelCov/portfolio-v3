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
        <section
            id="experience"
            className="flex flex-col mt-20 lg:mt-0 pt-10 w-full"
        >
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-10 text-primaryColor font-bold">
                Work Experience
            </h2>
            <div className="md:flex md:gap-8 lg:gap-10 relative font-sans">
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Work experience"
                    className="md:w-36 xl:min-w-36 2xl:w-48 relative"
                >
                    {data.map((obj, idx) => {
                        return (
                            <Tab
                                key={idx}
                                label={obj.company}
                                {...a11yProps(idx)}
                                className="flex items-start"
                            />
                        );
                    })}
                </Tabs>
                {data.map((obj, idx) => {
                    return (
                        <TabPanel key={idx} value={value} index={idx}>
                            <div className="flex flex-col gap-2 md:w-96 xl:w-3/4 2xl:w-3/5">
                                <p className="text-xl lg:text-2xl text-black font-bold">
                                    {obj.title}
                                </p>
                                <p className="text-gray text-sm xl:text-base">
                                    {obj.dates}
                                </p>
                                <div className="flex flex-col mt-4 gap-4 xl:text-lg text-gray md:h-72 lg:h-80 2xl:h-64">
                                    {obj.experience.map((exp, expIdx) => {
                                        return <p key={expIdx}>{exp}</p>;
                                    })}
                                </div>
                            </div>
                        </TabPanel>
                    );
                })}
            </div>
        </section>
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
            className="my-6 md:my-0 xl:w-full"
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
