import React from "react";
import { condition } from "./Conditions";

const Condition = () => {
  return (
    <div>
      <div className="container d-flex flex-column">
        <h5 className=" fs-2 fw-bolder">
          These are the following terms and conditions{" "}
        </h5>
        <div className="mt-1">
          {condition.map((c) => (
            <p key={c.id} className="my-3 text-muted">
              {c.id}. {c.term}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Condition;
