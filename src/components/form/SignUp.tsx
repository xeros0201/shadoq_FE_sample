import { ChangeEvent, FormEvent, useState } from "react";
import Typo from "../Typo";
import Button from "../button/Button";
import CustomInput from "../input/CustomInput";

interface FormData {
  username: string;
  email: string;
  password: string;
}
const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Welcome ... ${username}`);
  };
  return (
    <form
      className="py-5 px-5 w-[500px] border shadow-2xl rounded-xl "
      onSubmit={handleSubmit}
    >
      <Typo className="text-center mt-5 text-2xl font-bold tracking-wider uppercase text-sky-600">
        Sign up
      </Typo>
      <CustomInput
        type="text"
        name="username"
        placeholder="Enter your username..."
        value={username}
        onChange={handleChange}
      >
        Username
      </CustomInput>
      <CustomInput
        type="email"
        name="email"
        placeholder="Enter your email..."
        value={email}
        onChange={handleChange}
      >
        Email
      </CustomInput>
      <CustomInput
        type="password"
        name="password"
        placeholder="Enter your password..."
        value={password}
        onChange={handleChange}
      >
        Password
      </CustomInput>
      <Button className="w-full tracking-wider">Sign up</Button>
    </form>
  );
};

export default SignUp;
