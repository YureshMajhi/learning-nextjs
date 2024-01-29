import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <Image
          src={Logo}
          alt="dojo-helpdesk-logo"
          width={70}
          placeholder="blur"
          quality={100}
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </>
  );
};

export default Navbar;
