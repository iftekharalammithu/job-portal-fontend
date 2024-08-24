import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../Utils/Apis";
import axios from "axios";
import { toast } from "sonner";

const Signin = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeeventhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handle_submit = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json", // Important for FormData
        },
      });
      console.log(response.data);
      if (response.data) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="custom-border flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={handle_submit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              value={input.email}
              onChange={changeeventhandler}
              placeholder="Example@gmail.com"
            ></Input>{" "}
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeeventhandler}
              placeholder="Password"
            ></Input>{" "}
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeeventhandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeeventhandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className=" w-full my-4">
            Login
          </Button>
          <span className="text-sm ">
            Don't have an account?{" "}
            <Link className="text-blue-600 " to="/signup">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
