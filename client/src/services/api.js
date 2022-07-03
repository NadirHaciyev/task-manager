import axios from "axios";
import toast from "react-hot-toast";

export const fetchRegister = async (input) => {
  try {
    const res = await axios.post("http://localhost:4000/users", input);

    return res.data;
  } catch (e) {
    return e;
  }
};
export const fetchCreateUser = async (input) => {
  try {
    const res = await axios.post("http://localhost:4000/users", input);

    return res.data;
  } catch (e) {
    return e;
  }
};
export const fetchLogin = async (input) => {
  const { data } = await axios.get("http://localhost:4000/users");

  try {
    const user = data.find((item) => item.email === input.email);
    if (!user) {
      throw "Yanlis email";
    }
    const isMathced = user.password === input.password;

    if (!isMathced) {
      throw "Yanlis password";
    }

    return user;
  } catch (error) {
    toast.error(error)
  }
};

export const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:4000/users");

  return data;
};

export const patchUsers = (input, id) => {
  id.map(async (i) => {
    const { data } = await axios.get(`http://localhost:4000/users/${i}`);

    data.tasks.push(input);

    const res = await axios.patch(`http://localhost:4000/users/${i}`, data);
  });
};
