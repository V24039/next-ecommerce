"use client"

import type React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../auth-provider";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const router = useRouter();

  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    router.push("/login");
  }

  return children;
};

export default ProtectedRoute;
