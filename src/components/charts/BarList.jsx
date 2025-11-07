import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { BarList, useChart } from "@chakra-ui/charts";

const data = [
  { name: "Google", value: 1200000 },
  { name: "Direct", value: 100000 },
  { name: "Bing", value: 200000 },
  { name: "Yahoo", value: 20000 },
  { name: "ChatGPT", value: 1345000 },
  { name: "Github", value: 100000 },
  { name: "Yandex", value: 100000 },
];

const BarLists = () => {
  const chart = useChart({
    data,
    series: [{ name: "value", color: "pink.300" }],
    sort: { by: "value", direction: "asc" },
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
        Search Engine Traffic
      </Heading>

      <BarList.Root chart={chart}>
        <BarList.Content>
          <BarList.Label title="Source" titleAlignment="left">
            <BarList.Bar
              tooltip
              series="barList"
              color={chart.color("pink.300")}
            />
          </BarList.Label>

          <BarList.Label title="Visits" titleAlignment="right">
            <BarList.Value series="barList" />
          </BarList.Label>
        </BarList.Content>
      </BarList.Root>
    </Box>
  );
};

export default BarLists;
