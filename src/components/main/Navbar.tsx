"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeButton } from "./theme-button";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-white/30 border-b dark:bg-slate-900/30 dark:border-slate-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent relative">
              FintechApp
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </span>
          </Link>

          {/* Navigation Links */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
            {['Products', 'Solutions', 'Pricing', 'Company'].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink 
                  href={`/${item.toLowerCase()}`}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 text-slate-700 dark:text-slate-300",
                    "relative transition-all duration-300 group/navlink"
                  )}
                >
                  <span className="relative z-10">
                    {item}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-cyan-500/0 opacity-0 group-hover/navlink:opacity-100 transition-opacity duration-300" />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <ThemeButton />
            <Button 
              variant="ghost" 
              className="text-slate-700 dark:text-slate-300 hover:bg-white/10 hover:text-slate-900 dark:hover:text-white relative group"
            >
              <span className="relative z-10">
                Login
                <span className="absolute inset-0 -z-10 bg-blue-600/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
              </span>
            </Button>
            <Button className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/20 transition-all overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}