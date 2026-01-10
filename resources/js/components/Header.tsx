import { Link, usePage } from '@inertiajs/react';
import { LogIn, LogOut, Menu, User, X } from 'lucide-react';
import { useState } from 'react';

interface User {
    name: string;
    email: string;
    is_admin?: boolean;
}

export default function Header() {
    const { auth } = usePage<{ auth: { user: User | null } }>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500">
                            <span className="text-sm font-bold text-white">
                                BC
                            </span>
                        </div>
                        <span className="text-lg font-semibold text-white">
                            Bootcamp
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#bootcamps"
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                        >
                            Bootcamps
                        </Link>
                        {auth?.user && !auth.user.is_admin && (
                            <Link
                                href="/dashboard"
                                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                            >
                                My Dashboard
                            </Link>
                        )}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden items-center gap-4 md:flex">
                        {auth?.user ? (
                            <>
                                <Link
                                    href="/settings/profile"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                >
                                    <User className="h-4 w-4" />
                                    {auth.user.name}
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                                >
                                    <LogIn className="h-4 w-4" />
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-300 md:hidden"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-slate-800 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/#bootcamps"
                                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Bootcamps
                            </Link>
                            {auth?.user && !auth.user.is_admin && (
                                <Link
                                    href="/dashboard"
                                    className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    My Dashboard
                                </Link>
                            )}
                            <div className="border-t border-slate-800 pt-4">
                                {auth?.user ? (
                                    <div className="flex flex-col gap-3">
                                        <Link
                                            href="/settings/profile"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <User className="h-4 w-4" />
                                            {auth.user.name}
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <LogOut className="h-4 w-4" />
                                            Logout
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <Link
                                            href="/login"
                                            className="text-sm font-medium text-slate-300"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <LogIn className="h-4 w-4" />
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
