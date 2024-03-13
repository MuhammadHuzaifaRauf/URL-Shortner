import { authOptions } from "./src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import React from "react";

export default async function Main() {
  const data = await getServerSession(authOptions);

  return <div className="text-white text-[24px]">{JSON.stringify(data)}</div>;
}
