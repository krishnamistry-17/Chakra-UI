import { Stack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AreaCharts from "../components/charts/AreaChart";
import BarCharts from "../components/charts/BarChart";
import BarLists from "../components/charts/BarList";
import BarSegments from "../components/charts/BarSegment";
import DonutCharts from "../components/charts/DonutChart";
import LineCharts from "../components/charts/LineChart";
import PieCharts from "../components/charts/PieChart";
import RadarCharts from "../components/charts/RadarChart";
import ScatterCharts from "../components/charts/ScatterChart";
import SparklineCharts from "../components/charts/SparklineChart";

const Charts = () => {
  return (
    <Stack mx="auto" p={5}>
      <Grid spaceY={5}>
        <GridItem>
          <AreaCharts />
        </GridItem>
        <GridItem>
          <BarCharts />
        </GridItem>
        <GridItem>
          <BarLists />
        </GridItem>
        <GridItem>
          <BarSegments />
        </GridItem>
        <GridItem>
          <DonutCharts />
        </GridItem>
        <GridItem>
          <LineCharts />
        </GridItem>
        <GridItem>
          <PieCharts />
        </GridItem>
        <GridItem>
          <RadarCharts />
        </GridItem>
        <GridItem>
          <ScatterCharts />
        </GridItem>
        <GridItem>
          <SparklineCharts />
        </GridItem>
      </Grid>
      {/* <Stack bg="gray.100" px="16" py="20" gap="10">
        <Heading size="2xl">Website Analytics Dashboard</Heading>
        <Grid
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap="12"
        >
          <GridItem>
            <UniquePageViewsCard />
          </GridItem>
          <GridItem rowStart={2}>
            <ActiveUsersCard />
          </GridItem>
          <GridItem colSpan={3} rowSpan={2}>
            <PageVisitsCard />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" gap="12">
          <GridItem>
            <BrowserUsageCard />
          </GridItem>
          <GridItem colSpan={3}>
            <BounceRateCard />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap="12">
          <GridItem>
            <VisitorSourcesCard />
          </GridItem>
          <GridItem>
            <PageViewsCard />
          </GridItem>
        </Grid>
      </Stack> */}
    </Stack>
  );
};

export default Charts;
