import { Chart, useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Cell,
  Tooltip,
  Legend,
  Area,
  Label,
} from "recharts";

const data = [
  { allocation: 35, category: "Electronics" },
  { allocation: 30, category: "Clothes" },
  { allocation: 27, category: "Food" },
  { allocation: 20, category: "Books" },
  { allocation: 10, category: "Cosmetics" },
  { allocation: 5, category: "Other" },
];

const BarCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "category", color: "green.300" }],
  });

  return (
    <Box
      p={4}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      maxW="800px"
      mx="auto"
    >
      <Heading size="md" mb={4} textAlign="center">
        Category sales (Bar chart)
      </Heading>
      <Chart.Root chart={chart}>
        <ResponsiveContainer>
          <BarChart data={chart.data}>
            <defs>
              <Chart.Gradient
                id="colorAllocation"
                stops={[
                  {
                    offset: "4%",
                    color: chart.color("green.300"),
                    opacity: 0.7,
                  },
                  {
                    offset: "92%",
                    color: chart.color("green.300"),
                    opacity: 0,
                  },
                ]}
              />
            </defs>
            <XAxis dataKey="category" />
            <YAxis
              tickFormatter={chart.formatNumber({
                style: "percent",
              })}
            />
            <CartesianGrid
              strokeDasharray="4 4"
              stroke={chart.color("border.muted")}
            />
            <Tooltip
              formatter={(value) =>
                chart.formatNumber({ style: "percent" })(value)
              }
            />
            <Legend
              formatter={(value) =>
                `${value} (${chart.formatNumber({
                  style: "percent",
                })(value)})`
              }
            />
            <Label value="Category Sales" position="top" />

            <Bar dataKey="allocation" fill="url(#colorAllocation)">
              <Cell fill={chart.color("green.500")} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Chart.Root>
    </Box>
  );
};

export default BarCharts;
