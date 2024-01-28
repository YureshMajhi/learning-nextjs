import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">dashboard</Link>
        <Link href="/tickets">tickets</Link>
      </nav>
    </>
  );
};

export default Navbar;
