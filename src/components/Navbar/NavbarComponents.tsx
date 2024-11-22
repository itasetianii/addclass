'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { DATA_NAV } from './DATA_NAV';

export function NavbarComponents() {
  return (
    <Navbar fluid rounded className="text-[var(--primary-color)] font-bold">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">User name</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {DATA_NAV.map((data, idx) => (
          <Navbar.Link className="text-[var(--primary-color)] font-bold uppercase" href={data.path} key={idx}>
            {data.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
