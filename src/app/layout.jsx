"use client";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/ui/sidebar";
import { ChevronRight, MenuIcon, MoreVerticalIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { categories } from "@/lib/data";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
// console.log(categories);
export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);
  const path = usePathname();
  console.log(path);
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen w-screen flex flex-col relative ",
          inter.className
        )}
      >
        <header className="h-24  z-20 fixed max-w-screen-[1920px] w-full flex items-center justify-between bg-gray-600/50">
          <nav className=" h-full gap-4 w-full flex md:px-10 px-5 flex-row items-center justify-between ">
            <MenuIcon onClick={() => setOpen(!open)} className="h-8 w-8" />
            <input
              type="text"
              className=" text-black h-12 rounded-md max-w-xs w-full    outline-none text-base px-4 "
              placeholder="Search for e.g.potato"
            />
            <MoreVerticalIcon className="h-8 w-8" />
          </nav>
        </header>
        <main className="flex h-screen overflow-hidden relative w-full ">
          <aside
            className={cn(
              "bg-slate-950  md:relative z-10 absolute  flex flex-col top-24 max-w-xs w-0 transition-all duration-700 ease-in-out ",
              open && " py-4 px-5 w-full"
            )}
          >
            {categories.map((category) => (
              <div key={category.id} className="text-white ">
                <Link
                  className={cn(
                    "text-white hover:underline",
                    path === slugify(category.title) && "underline "
                  )}
                  href={slugify(category.title)}
                >
                  <span className="flex items-center gap-2">
                    <p>{category.title} </p>
                    <ChevronRight />
                  </span>
                </Link>
                {path === slugify(category.title) && (
                  <span>
                    <Link href={`${category.parentId}`}>
                      <p>{category.parentId}</p>
                    </Link>
                  </span>
                )}
              </div>
            ))}
          </aside>

          {children}
        </main>
      </body>
    </html>
  );
}
