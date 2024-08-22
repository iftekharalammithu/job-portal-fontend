import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-white custom-border">
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
            <PopoverContent className="w-80 custom-border">
              <h1 className="w-16 custom-border">mithu</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
