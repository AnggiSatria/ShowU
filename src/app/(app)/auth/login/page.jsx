"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "@/@components/FormInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useRegisterUser from "./hooks/login";
import { toast } from "@/components/ui/use-toast";
import {
  useFetchGoogleLoginCallbackQuery,
  useFetchGoogleLoginQuery,
  usePostRegisterUsersMutation,
} from "@/server/hooks/auth";

export default function page() {
  const methods = useForm();

  const { register, handleSubmit, errors, isSubmitting, control } =
    useRegisterUser();

  const { data, refetch } = useFetchGoogleLoginQuery();

  const handleLoginGoogle = async () => {
    refetch();
  };

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const response = await usePostRegisterUsersMutation(data);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      toast.error(
        error?.response
          ? error?.response?.data?.message
          : "Network Error, Please Check Again!"
      );
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 shadow w-5/12 py-3 rounded-md absolute top-20">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign in
              </a>

              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>

            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="relative flex items-center mt-4">
              <span className="absolute"></span>

              <Select className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                  <SelectItem value="USER">USER</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6 gap-3 grid grid-rows-2">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <button
                onClick={handleLoginGoogle}
                type="button"
                className="flex items-center justify-center w-full px-6 py-2  text-sm font-medium text-white transition-colors duration-300 transform  rounded-lg border-2 border-black  hover:border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5_logos</title>
                  <path d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z" />
                </svg>

                <span className="hidden mx-2 sm:inline text-black">
                  Sign in with Google
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
