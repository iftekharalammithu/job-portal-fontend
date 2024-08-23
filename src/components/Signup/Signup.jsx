import React from "react";
import Navbar from "../Navbar/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="custom-border flex items-center justify-center max-w-7xl mx-auto ">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign UP</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Your Name"></Input>
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="text" placeholder="Example@gmail.com"></Input>
          </div>
          <div className="my-2">
            <Label>Phone</Label>
            <Input type="text" placeholder="Your Phone Number"></Input>
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
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
              ></Input>
            </div>
          </div>
          <Button type="submit" className=" w-full my-4">
            Sign Up
          </Button>
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
