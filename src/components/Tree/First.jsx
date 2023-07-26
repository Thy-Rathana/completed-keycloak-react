import React, { createContext, useContext, useState } from "react";
import Second from "./Second";

export const TreeDataContext = createContext({});

function First(any) {
  const [count, setCount] = useState(0);

  return (
    <TreeDataContext.Provider value={{ count, setCount }}>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 bg-gray-400 px-3 py-2"
      >
        +
      </button>
      <Second />
    </TreeDataContext.Provider>
  );
}

export default First;
