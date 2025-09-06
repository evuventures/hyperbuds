"use client";

import { AuthProvider } from "../components/AuthProvider";

export default function ClientLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}