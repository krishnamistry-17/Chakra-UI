import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React, { Fragment } from "react";
import {
  Legend,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { windows: 30, mac: 100, month: "January" },
  { windows: 120, mac: 20, month: "February" },
  { windows: 45, mac: 130, month: "March" },
  { windows: 140, mac: 40, month: "May" },
  { windows: 60, mac: 50, month: "June" },
  { windows: 20, mac: 160, month: "July" },
];
const RadarCharts = () => {
  const chart = useChart({
    data,
    series: [
      { name: "windows", color: "green" },
      { name: "mac", color: "red" },
    ],
  });
  return (
    <Box
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      maxW="600px"
      mx="auto"
    >
      <Heading size="md" mb={4} textAlign={"center"}>
        Radar Chart
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={chart.data}>
          <PolarGrid />
          <Legend />
          {chart.series.map((item) => (
            <Radar
              key={item.name}
              dataKey={item.name}
              stroke={item.color}
              fill={item.color}
              fillOpacity={0.6}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RadarCharts;
