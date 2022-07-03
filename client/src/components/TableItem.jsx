import { useEffect, useState } from "react";

// requests
import { fetchUsers } from "../services/api";

function TableItem({ selectedUsers, setSelectedUsers }) {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetchUsers();
      setUsers(res);
    })();
  }, []);

  const handleSelect = (user) => {
    const findUser = selectedUsers.find((item) => item.id == user.id);
    if (findUser) {
      const filteredUsers = selectedUsers.filter((item) => item.id !== user.id);
      setSelectedUsers(filteredUsers);
    } else {
      setSelectedUsers((prev) => [...prev, user]);
    }
    console.log(selectedUsers);
  };

  return (
    <>
      {users &&
        users.map((user) => (
          <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">{user.organizationName}</td>
            <td className="px-6 py-4">{user.userName}</td>
            <td className="px-6 py-4">{user.userSurname || "empty"}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.role}</td>
            {user.role === "user" ? (
              <td className="px-6 py-4 text-right">
                <button
                  type="button"
                  className="font-medium text-blue-600 hover:underline whitespace-nowrap"
                  onClick={() => handleSelect(user)}
                >
                  {selectedUsers.find((i) => i.id == user.id)
                    ? "Added"
                    : "+ Add task"}
                </button>
              </td>
            ) : (
              ""
            )}
          </tr>
        ))}
    </>
  );
}

export default TableItem;
