import React from "react";
import useCounterStore from "../store/counter";
import { HStack } from "@chakra-ui/react";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <p>Counter using zustand</p>
      <p>Count: {count}</p>

      <HStack>
        <button onClick={increment} variant="outline">
          Increment
        </button>
        <button onClick={decrement} variant="outline">
          Decrement
        </button>
        <button onClick={reset} variant="outline">
          Reset
        </button>
      </HStack>
    </div>
  );
};

export default Counter;
