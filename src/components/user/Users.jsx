import React from "react";

export const Users = ({ data }) => {
  return (
    <>
      <div>
        {data?.length &&
          data.map((item) => (
            <div key={item.id} className="truncate">
              {JSON.stringify(item)}
            </div>
          ))}
      </div>
    </>
  );
};
