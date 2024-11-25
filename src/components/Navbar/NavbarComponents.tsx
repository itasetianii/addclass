'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { DATA_NAV } from './DATA_NAV';

export function NavbarComponents() {
  return (
    <Navbar fluid rounded className="text-[var(--primary-color)]  container">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-3xl font-medium dark:text-white uppercase">User name</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {DATA_NAV.map((data, idx) => (
          <Navbar.Link className="text-[var(--primary-color)] font-medium uppercase text-2xl" href={data.path} key={idx}>
            {data.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
