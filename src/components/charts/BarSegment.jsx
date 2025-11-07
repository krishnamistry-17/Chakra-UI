import { BarSegment, useChart } from "@chakra-ui/charts";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const data = [
  { name: "Google", value: 500000, color: "teal.solid" },
  { name: "Direct", value: 100000, color: "blue.solid" },
  { name: "Bing", value: 200000, color: "orange.solid" },
  { name: "Yandex", value: 100000, color: "purple.solid" },
];

const BarSegments = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data,
    series: [{ name: "barSegment", color: "teal.solid" }],
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
        Bar segment chart
      </Heading>
      <BarSegment.Root chart={chart}>
        <BarSegment.Content>
          <BarSegment.Bar
            tooltip
            series="barSegment"
            color={chart.color("teal.solid")}
          />
          <BarSegment.Legend series="barSegment" legendPosition="bottom" />
        </BarSegment.Content>
      </BarSegment.Root>
    </Box>
  );
};

export default BarSegments;
