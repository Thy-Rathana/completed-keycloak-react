import React from "react";

export const Comments = ({ data }) => {
  return (
    <>
      <div className="truncate">
        {data?.length &&
          data.map((item) => (
            <div key={item.id} className="truncate">
              {JSON.stringify(item)}{" "}
            </div>
          ))}
      </div>
    </>
  );
};
