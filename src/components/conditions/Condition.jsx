import React from "react";
import { condition } from "./Conditions";

const Condition = () => {
  return (
    <div>
      <div className="container d-flex flex-column">
        <h5 className="text-muted my-3">
          These are the following terms and conditions{" "}
        </h5>
        <div className="mt-3">
          {condition.map((c) => (
            <p className="my-5 text-muted">
              {c.id}. {c.term}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Condition;
