"use client";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { Loader2 } from "lucide-react";

const formSchema = z.object({
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

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Spinner
  const Icons = {
    spinner: Loader2,
  };

  const submitHandler = async (values: FormValues) => {
    setLoading(true);

    const formData = {
      email: values.email,
      password: values.password,
      redirect: false,
    };

    try {
      const response = await signIn("credentials", formData);
      if (response?.ok) {
        toast({
          title: "Login Successfull",
        });
        router.push("/");
      } else {
        toast({
          title: `${response?.error}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Authentication",
        description: "Login Failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="font-cal text-3xl font-bold">Welcome back</h1>
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
              {loading ? (
                <span>
                  <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                </span>
              ) : (
                "Sign in"
              )}
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
        <Link
          href={"/auth/signup"}
          className="font-inter text-muted-foreground"
        >
          Dont have an account?{" "}
          <span className="underline text-white">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
