import React from "react";

function Progress() {
  const Tasks = [];
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center">Hello {"John"}</h2>
      {Tasks.length < 1
        ? `You don't have any incomplete tasks`
        : `You have ${Tasks.length} number of Task(s), check it below`}
    </div>
  );
}

export default Progress;
