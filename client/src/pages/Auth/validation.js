import { object, string, number, date, InferType, ref } from "yup";

const validationSchema = object({
  organizationName: string().required(),
  phoneNumber: number().required(),
  address: string().required(),
  userName: string().min(3).required(),
  email: string().email().required(),
  password: string().min(6).required()
});

export default validationSchema;
