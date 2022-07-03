import { useState } from "react";
import { Link } from "react-router-dom";

// components
import TableItem from "../../components/TableItem";
import TaskModal from "../../components/modals/TaskModal";

function Admin() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5 mt-5 px-6">
      <div className="flex justify-between h-8">
        <div className="text-xl">Users management</div>
        <div className="flex gap-2 items-center">
          <Link to='/user-create'>
            <button className="border rounded-md bg-blue-500 text-white px-2 py-1">
              Add user
            </button>
          </Link>
          {selectedUsers.length ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border rounded-md bg-blue-500 text-white px-2 py-1"
            >
              Create task
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg border">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Organization Name
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableItem
              selectedUsers={selectedUsers}
              setSelectedUsers={setSelectedUsers}
            />
          </tbody>
        </table>
      </div>
      <TaskModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
    </div>
  );
}

export default Admin;
