import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import { removeMe } from "../redux/reducers/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.auth);

  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/" className="text-gray-800 text-2xl">
                  Task Manager
                </NavLink>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div className="flex">
                    {me ? (
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-0">
                          <strong className="text-md text-gray-800">{`${
                            me.userName
                          }${me.role === "admin" ? "(Admin)" : ""}`}</strong>
                          <span className="text-sm text-gray-600">
                            {me.organizationName}
                          </span>
                        </div>
                        <Menu.Button className="h-10 w-10 bg-gray-800 flex text-sm rounded-full">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end md:flex-1 lg:w-0">
                        <NavLink
                          to="/login"
                          className="whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-600"
                        >
                          Login
                        </NavLink>
                        <NavLink
                          to="/register"
                          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Register
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      {me.role === "admin" ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="user-create"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-start text-gray-700 w-full"
                              )}
                            >
                              Create a user
                            </Link>
                          )}
                        </Menu.Item>
                      ) : (
                        ""
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-start text-gray-700 w-full"
                            )}
                            onClick={() => dispatch(removeMe())}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
