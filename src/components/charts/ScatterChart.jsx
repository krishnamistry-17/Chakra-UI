import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import {
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { x: 100, y: 200, id: "group1" },
  { x: 120, y: 100, id: "group1" },
  { x: 170, y: 300, id: "group1" },
  { x: 140, y: 250, id: "group1" },
  { x: 150, y: 400, id: "group1" },
  { x: 110, y: 280, id: "group1" },
  { x: 200, y: 260, id: "group2" },
  { x: 240, y: 290, id: "group2" },
  { x: 190, y: 290, id: "group2" },
  { x: 198, y: 250, id: "group2" },
  { x: 180, y: 280, id: "group2" },
  { x: 210, y: 220, id: "group2" },
];

const ScatterCharts = () => {
  const chart = useChart({
    data,
    series: [
      { name: "group1", color: "blue" },
      { name: "group2", color: "red" },
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
      <Heading size="md" mb={4} textAlign="center">
        Scatter Chart
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart data={chart.data}>
          <Tooltip />
          <XAxis
            dataKey="x"
            label={{ value: "X Axis", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            dataKey="y"
            label={{ value: "Y Axis", angle: -90, position: "insideLeft" }}
          />
          {chart.series.map((item) => (
            <Scatter
              key={item.name}
              dataKey={item.name}
              fill={chart.color(item.color)}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ScatterCharts;
