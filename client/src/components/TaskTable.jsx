import React from "react";

function TaskTable({ me }) {
  return (
    <>
      {me &&
        me.tasks.map((task, i) => (
          <tr key={i} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">{task.title}</td>
            <td className="px-6 py-4">{task.description}</td>
            <td className="px-6 py-4">{task.deadline}</td>
            <td className="px-6 py-4">{task.status ? "Active" : "Finished"}</td>
          </tr>
        ))}
    </>
  );
}

export default TaskTable;
