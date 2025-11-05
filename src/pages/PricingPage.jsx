import { Box, Heading, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import Yearly from "../components/Yearly";
import Monthly from "../components/Monthly";

const PricingPage = ({ pricingData, yearlypricingData, onTabChange }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  const handleTabChange = (value) => {
    setActiveTab(value);
    if (onTabChange) onTabChange(value);
  };

  return (
    <Box p={5}>
      <Heading textAlign="center" my={4} fontSize={["xl", "2xl", "3xl"]}>
        Pricing
      </Heading>
      <Box maxW="6xl" mx="auto">
        <Tabs.Root
          defaultValue="monthly"
          className="flex flex-row gap-4"
          onValueChange={handleTabChange}
          value={activeTab}
        >
          <Tabs.List>
            <Tabs.Trigger value="monthly">
              <LuUser />
              Monthly
            </Tabs.Trigger>
            <Tabs.Trigger value="yearly">
              <LuUser />
              Yearly
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="monthly">
            <Box>
              <Monthly />
            </Box>
          </Tabs.Content>
          <Tabs.Content value="yearly">
            <Box>
              <Yearly />
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export default PricingPage;
