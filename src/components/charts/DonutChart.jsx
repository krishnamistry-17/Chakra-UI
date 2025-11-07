import React from "react";
import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import {
  PieChart,
  Tooltip,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Windows", value: 400, color: "blue.400" },
  { name: "Mac", value: 300, color: "orange.400" },
  { name: "Linux", value: 300, color: "pink.400" },
  { name: "Other", value: 200, color: "green.400" },
];

const DonutCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "donut", color: "pink.300" }],
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
        Donut Chart
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
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              stroke="white"
              label={{ name: "name", value: "value" }}
            >
              <Label
                position={"center"}
                value={"Donut Chart"}
                fontSize={20}
                fontWeight="bold"
              />
              {chart.data.map((item, index) => (
                <Cell key={index} fill={chart.color(item.color)} />
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

export default DonutCharts;
