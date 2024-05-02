'use client';

import { ThemeSwitcher } from '@/app/components/themes/ThemeSwicher';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

import { useState } from 'react';
import CustomNavbarBrand from '../../atoms/CustomNavbarBrand';

export default function NextuiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Menu', link: '/menu' },
    { label: 'Blog', link: '/blog' },
    { label: 'Event', link: '/event' },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarBrand>
          <CustomNavbarBrand />
          <p className="font-bold text-inherit max-[680px]:hidden">Ciel</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="pr-3 sm:hidden"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full px-5 py-4"
              color={'foreground'}
              href={item.link}
              size="md"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={'foreground'
              }
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
