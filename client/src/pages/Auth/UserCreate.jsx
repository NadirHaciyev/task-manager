import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";

// Redux Toolkit
import { useDispatch } from "react-redux";
import { addMe } from "../../redux/reducers/authSlice";

// Icons
import { LockClosedIcon } from "@heroicons/react/solid";

// requests
import { fetchCreateUser, fetchRegister } from "../../services/api";

function UserCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      organizationName: "",
      userSurname: "",
      userName: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      const data = { ...values, role: "user", tasks: [] };
      try {
        fetchCreateUser(data);
        navigate("/");
        toast.success('Sucess')
      } catch (e) {
        console.log(e);
      }
    }
  });

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <NavLink to="/" className="text-gray-800 text-2xl">
            Task Manager
          </NavLink>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            User create
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px flex flex-col">
            <div>
              <label htmlFor="organization-name" className="sr-only">
                Organization name
              </label>
              <input
                type="text"
                name="organizationName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none"
                placeholder="Organization Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="user-surname" className="sr-only">
                User Surname
              </label>
              <input
                type="text"
                name="userSurname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none"
                placeholder="User Surname"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="user-name" className="sr-only">
                User Name
              </label>
              <input
                name="userName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Create a user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;
