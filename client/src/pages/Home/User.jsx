import { useSelector } from "react-redux";

// components
import TaskTable from "../../components/TaskTable";

function User() {
  const { me } = useSelector((state) => state.auth);

  return (
    <div className=" mx-10 mt-6 flex flex-col gap-4">
      <div className="text-2xl">User Tasks</div>
      <div className="relative overflow-x-auto sm:rounded-lg border">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <TaskTable me={me} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
