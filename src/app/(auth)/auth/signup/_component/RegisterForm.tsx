"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name is required!",
    })
    .max(50),
  email: z
    .string()
    .email()
    .min(2, {
      message: "Email is required!",
    })
    .max(50),
  password: z
    .string()
    .min(2, {
      message: "Password is required!",
    })
    .max(50),
});

type FormValues = z.infer<typeof formSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitHandler = async (values: FormValues) => {
    setLoading(true);

    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    console.log(formData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-cal text-3xl font-bold">
          Create your Imaginify account
        </h1>
      </div>

      <div className="w-full sm:w-[500px] p-6 border rounded-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 pl-4"
                        type="text"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 pl-4"
                        type="email"
                        placeholder="johndoe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        className="h-12"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={loading}
              className="w-full font-semibold font-cal text-md"
              type="submit"
            >
              Sign up
            </Button>
          </form>
        </Form>

        <div className="py-8">
          <hr />
        </div>

        <div>
          <Button
            variant={"outline"}
            className="w-full py-6 font-cal text-[16px] font-semibold"
          >
            Continue with Google
          </Button>
        </div>
      </div>

      <div className="text-center">
        <Link href={"/auth/login"} className="font-inter text-muted-foreground">
          Already have an account?{" "}
          <span className="underline text-white">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
