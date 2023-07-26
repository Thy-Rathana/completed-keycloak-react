import React from "react";

export const Albums = ({ data }) => {
  return (
    <>
      {data?.length &&
        data.map((item) => (
          <div key={item.id} className="truncate">
            {JSON.stringify(item)}
          </div>
        ))}
    </>
  );
};
