import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-text_color">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5  list-none">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Browser</Link>
            </li>
          </ul>
          {!user ? (
            <div className=" flex font-medium gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    className="cursor-pointer"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-2  ">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage
                      className="cursor-pointer space-y-2"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium ">Iftekhar Alam</h1>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-3 text-gray-600">
                  <div className="flex  cursor-pointer gap-2 w-fit items-center">
                    <User2></User2>
                    <Button variant="ghost">View Profile</Button>
                  </div>
                  <div className="flex cursor-pointer gap-2 w-fit items-center">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
