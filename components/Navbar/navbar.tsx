// components/navbar.tsx
"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import logo from "../../public/logo.svg";
export function Navbar() {
    return (
        <header className="border-b border-border sticky top-0 z-50 bg-background">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={25}
                        height={25}
                        className="rounded bg-white"
                    />
                    <span className="font-semibold text-sm">Docs</span>
                    <span className="font-semibold text-sm">Components</span>
                    <span className="font-semibold text-sm">Blocks</span>
                    <span className="font-semibold text-sm">Charts</span>
                    <span className="font-semibold text-sm">Themes</span>
                    <span className="font-semibold text-sm">Colors</span>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="text-sm px-3 py-1.5 rounded-md border border-border bg-background"
                    />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
