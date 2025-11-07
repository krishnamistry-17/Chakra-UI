import { useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const data = [
  { value: 10 },
  { value: 16 },
  { value: 19 },
  { value: 15 },
  { value: 12 },
  { value: 15 },
  { value: 10 },
  { value: 18 },
];

const SparklineCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "value", color: "red" }],
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
        Sparkline charts
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chart.data}>
          {chart.series.map((item) => (
            <Area
              key={item.name}
              dataKey={item.name}
              stroke={item.color}
              fill={item.color}
              fillOpacity={0.6}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SparklineCharts;
