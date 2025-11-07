import React from "react";
import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { sale: 10, month: "January" },
  { sale: 95, month: "February" },
  { sale: 87, month: "March" },
  { sale: 88, month: "May" },
  { sale: 65, month: "June" },
  { sale: 90, month: "August" },
];

const LineCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "sale", color: "purple.100" }],
  });

  return (
    <Box>
      <Heading size="md" mb={4} textAlign="center">
        Line Chart
      </Heading>

      <Box
        p={6}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        maxW="800px"
        mx="auto"
        h="350px"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chart.data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={chart.color("gray.200")}
            />
            <XAxis
              dataKey="month"
              label={{ value: "Month", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              label={{ value: "Sales", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value, name) => [`${value}`, `${name}`]}
              contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
            />
            <Line
              type="monotone"
              dataKey="sale"
              stroke={chart.color("purple.400")}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default LineCharts;
