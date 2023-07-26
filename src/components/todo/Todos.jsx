import React from "react";

export const Todos = ({ data }) => {
  return (
    <div className="truncate">
      {data?.length &&
        data.map((item) => (
          <div className="truncate" key={item.id}>
            {JSON.stringify(item)}{" "}
          </div>
        ))}
    </div>
  );
};
