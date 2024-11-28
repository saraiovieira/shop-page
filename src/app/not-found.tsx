import Link from "next/link";
import React, { ReactNode } from "react";


export default function NotFound(): ReactNode{
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/"> Return Home</Link>
    </div>
  );
}