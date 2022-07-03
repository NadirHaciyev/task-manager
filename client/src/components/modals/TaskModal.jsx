import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";

// headless
import { Dialog, Transition } from "@headlessui/react";

// Redux Toolkit
import { useDispatch } from "react-redux";
import { addMe } from "../../redux/reducers/authSlice";

// Icons
import { LockClosedIcon } from "@heroicons/react/solid";
import { fetchLogin, patchUsers } from "../../services/api";

function TaskModal({ isOpen, setIsOpen, selectedUsers, setSelectedUsers }) {
  const dispatch = useDispatch();
  const id = selectedUsers.map((i) => i.id);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: "",
      description: "",
      deadline: ""
    },
    onSubmit: async (values) => {
      console.log(id);
      try {
        await patchUsers({ ...values, status: true }, id);
        setIsOpen(false);
        setSelectedUsers([]);
        toast.success("The task was successfully added");
      } catch (e) {
        console.log(e);
      }
    }
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px flex flex-col">
                    <div>
                      <label htmlFor="title" className="sr-only">
                        Title
                      </label>
                      <input
                        name="title"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Title"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="sr-only">
                        Description
                      </label>
                      <input
                        name="description"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Description"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="deadline" className="sr-only">
                        Deadline
                      </label>
                      <input
                        name="deadline"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Deadline"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default TaskModal;
