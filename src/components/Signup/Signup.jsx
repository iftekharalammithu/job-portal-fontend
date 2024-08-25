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
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "@/Redux/Auth_slice";

const Signup = () => {
  const dispatch = useDispatch();

  const [input, setinput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const changeeventhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const chageFilehandle = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };
  const loading = useSelector((state) => state.Auth_slice.loading);
  const handle_submit = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      dispatch(setloading(true));
      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        input,
        {
          headers: {
            "Content-Type": "application/json", // Important for FormData
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setloading(false));
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
          <h1 className="font-bold text-xl mb-5">Sign UP</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeeventhandler}
              placeholder="Your Name"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              value={input.email}
              onChange={changeeventhandler}
              placeholder="Example@gmail.com"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Phone</Label>
            <Input
              type="text"
              name="phonenumber"
              value={input.phonenumber}
              onChange={changeeventhandler}
              placeholder="Your Phone Number"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeeventhandler}
              placeholder="Password"
            ></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              className="flex items-center gap-4 my-5"
              defaultValue="comfortable"
            >
              <div className="flex items-center space-x-2">
                <input
                  checked={input.role === "Student"}
                  onChange={changeeventhandler}
                  type="radio"
                  name="role"
                  value="Student"
                />
                <Label htmlFor="r2">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={input.role === "Recruiter"}
                  onChange={changeeventhandler}
                  name="role"
                  value="Recruiter"
                />
                <Label htmlFor="r3">Recruter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                onChange={chageFilehandle}
                accept="image/*"
                type="file"
                className="cursor-pointer"
              ></Input>
            </div>
          </div>
          {loading ? (
            <Button className=" w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>
              Please Wait...
            </Button>
          ) : (
            <Button type="submit" className=" w-full my-4">
              Sign Up
            </Button>
          )}
          <span className="text-sm ">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
