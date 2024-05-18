import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormInput({
  label,
  type,
  placeholder,
  name,
  value,
  register,
  errors,
  size = "md",
  className = "",
  svg,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const registerProps = register
    ? {
        ...register(name),
      }
    : {};
  const sizeInput = {
    sm: "py-1",
    md: "py-2",
    lg: "py-3",
  };
  return (
    <div className="w-full">
      <Label
        className={`md:text-sm text-xs 2xl:text-base mb-3 font-[600]`}
        htmlFor={name}
      >
        {label}
      </Label>
      <div className="relative">
        {/* <Input
          value={value}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          name={name}
          className={twMerge(
            `rounded-md mt-1 ${sizeInput[size]} px-3 text-secondary font-light w-full border-2 md:text-sm border-[#DADADA] outline-none text-xs`,
            className
          )}
          {...registerProps}
        />
        {type === "password" && (
          <div className="absolute right-1 top-1 mt-3">
            {showPassword ? (
              <IconEye
                onClick={() => setShowPassword(false)}
                color="#010E80"
                className="w-5 h-5"
              />
            ) : (
              <IconEyeOff
                onClick={() => setShowPassword(true)}
                color="#010E80"
                className="w-5 h-5"
              />
            )}
          </div>
        )} */}

        <div class="relative flex items-center mt-6 w-full">
          <span class="absolute">{svg}</span>

          <input
            type={type}
            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={placeholder}
          />
        </div>
      </div>
      {/* <h6
        className="text-xs block"
        style={{
          color: "#D04848",
        }}
      >
        {errors?.[`${name}`]?.message}
      </h6> */}
    </div>
  );
}
