import { Link } from '@inertiajs/react';
import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500">
                                <span className="text-sm font-bold text-white">
                                    BC
                                </span>
                            </div>
                            <span className="text-lg font-semibold text-white">
                                Bootcamp
                            </span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Transform your career with modern web development
                            skills.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#bootcamps"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Bootcamps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">
                            Connect
                        </h3>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-emerald-400"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-emerald-400"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-emerald-400"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-slate-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
                        <p>© {currentYear} Bootcamp. All rights reserved.</p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="h-4 w-4 text-red-500" />{' '}
                            by{' '}
                            <span className="font-semibold text-emerald-400">
                                Getahun Negash
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
