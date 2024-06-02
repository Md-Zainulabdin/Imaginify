import prismadb from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json("Error", {
      status: 400,
      statusText: "All feilds are required!",
    });
  }

  console.log("done");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prismadb.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user, {
      status: 200,
      statusText: "User created successfully",
    });
  } catch (error) {
    console.log("[USER-POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
