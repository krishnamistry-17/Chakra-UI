import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const AreaCharts = () => {
  const chart = useChart({
    data,
    series: [{ name: "sales", color: "blue.500" }],
  });

  return (
    <Box
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      maxW="800px"
      mx="auto"
    >
      <Heading size="md" mb={4} textAlign="center">
        Monthly Sales (Area Chart)
      </Heading>

      <Chart.Root chart={chart}>
        <ResponsiveContainer>
          <AreaChart
            data={chart.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <Chart.Gradient
                id="colorSales"
                stops={[
                  {
                    offset: "5%",
                    color: chart.color("blue.500"),
                    opacity: 0.8,
                  },
                  { offset: "95%", color: chart.color("blue.500"), opacity: 0 },
                ]}
              />
            </defs>

            <XAxis dataKey="month" />
            <YAxis
              tickFormatter={chart.formatNumber({
                style: "currency",
                currency: "USD",
              })}
            />
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={chart.color("border.muted")}
            />
            <Tooltip
              formatter={(value) =>
                chart.formatNumber({ style: "currency", currency: "USD" })(
                  value
                )
              }
            />
            <Area
              type="monotone"
              dataKey={chart.key("sales")}
              stroke={chart.color("blue.500")}
              fill="url(#colorSales)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Chart.Root>
    </Box>
  );
};

export default AreaCharts;
