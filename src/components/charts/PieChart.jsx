import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Windows", value: 400, color: "blue.400" },
  { name: "Mac", value: 300, color: "orange.400" },
  { name: "Linux", value: 300, color: "pink.400" },
  { name: "Other", value: 200, color: "green.400" },
];

const PieCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "pie", color: "yellow.200" }],
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
      <Heading size="md" textAlign="center">
        Pie Chart
      </Heading>
      <Box h="300px">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chart.data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={chart.color("yellow.200")}
              label={{ name: "name", value: "value" }}
            >
              {chart.data.map((item, index) => (
                <Cell
                  stroke={chart.color("white")}
                  key={index}
                  fill={chart.color(item.color)}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}`, `${name}`]}
              contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PieCharts;
