import React from "react";
import Navbar from "../Navbar/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="custom-border flex items-center justify-center max-w-7xl mx-auto ">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="text" placeholder="Example@gmail.com"></Input>
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Password"></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              className="flex items-center gap-4 my-5"
              defaultValue="comfortable"
            >
              <div className="flex items-center space-x-2">
                <input type="radio" name="role" value="student" />
                <Label htmlFor="r2">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="role" value="recruter" />
                <Label htmlFor="r3">Recruter</Label>
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
