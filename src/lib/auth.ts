import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option";

export const getAuth = async () => {
  const session = await getServerSession(options);
  return session;
};
