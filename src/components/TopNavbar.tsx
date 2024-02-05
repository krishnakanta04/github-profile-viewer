import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Github } from "lucide-react";

export default function TopNavbar() {
  return (
    <Navbar>
      <NavbarBrand className="gap-x-2" as={Link} href="/">
        <Github />
        <p className="font-bold text-inherit">GitHub Profile Viewer</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
