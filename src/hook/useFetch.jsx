import React, { useEffect, useRef, useState } from "react";

const useFetch = (endpoint) => {
  const [response, setResponse] = useState();
  const running = useRef(false);

  useEffect(() => {
    if (running.current) {
      return;
    }

    running.current = true;

    fetch("https://jsonplaceholder.typicode.com" + endpoint)
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);

        console.log("json", json);
      });
  }, [endpoint]);

  return response;
};

export default useFetch;
