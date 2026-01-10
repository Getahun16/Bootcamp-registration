import { logout } from '@/routes';
import { type User } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import {
    Calendar,
    ChevronLeft,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    Users,
    X,
} from 'lucide-react';
import { type ReactNode, useState } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const currentPath = usePage().url;

    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
            current: currentPath === '/dashboard',
        },
        {
            name: 'Bootcamps',
            href: '/dashboard/bootcamps',
            icon: Calendar,
            current: currentPath.startsWith('/dashboard/bootcamps'),
        },
        {
            name: 'Registrations',
            href: '/dashboard/registrations',
            icon: Users,
            current: currentPath.startsWith('/dashboard/registrations'),
        },
    ];

    const handleLogout = () => {
        if (confirm('Are you sure you want to logout?')) {
            router.post(logout.url());
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-950">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}
            >
                {/* Sidebar header */}
                <div className="flex h-16 items-center justify-between border-b border-slate-800 px-4">
                    {!sidebarCollapsed && (
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-white"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <span className="text-sm font-bold">BC</span>
                            </div>
                            <span className="text-lg font-semibold">
                                Bootcamp Admin
                            </span>
                        </Link>
                    )}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-slate-400 hover:text-white lg:hidden"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="hidden text-slate-400 hover:text-white lg:block"
                    >
                        <ChevronLeft
                            className={`h-5 w-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                    item.current
                                        ? 'bg-emerald-500/10 text-emerald-400'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                } ${sidebarCollapsed ? 'justify-center' : ''}`}
                                title={sidebarCollapsed ? item.name : ''}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                {!sidebarCollapsed && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* User section */}
                <div className="border-t border-slate-800 p-4">
                    <div
                        className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}
                    >
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-semibold text-white">
                            {auth.user.name.charAt(0).toUpperCase()}
                        </div>
                        {!sidebarCollapsed && (
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-white">
                                    {auth.user.name}
                                </p>
                                <p className="truncate text-xs text-slate-400">
                                    Administrator
                                </p>
                            </div>
                        )}
                    </div>
                    {!sidebarCollapsed && (
                        <div className="mt-3 flex gap-2">
                            <Link
                                href="/settings/profile"
                                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                            >
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-red-500/10 hover:text-red-400"
                                title="Logout"
                            >
                                <LogOut className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main content */}
            <div
                className={`flex flex-1 flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}
            >
                {/* Top bar */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/95 px-4 backdrop-blur-sm lg:px-6">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-slate-400 hover:text-white lg:hidden"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                            <h2 className="text-sm font-medium text-slate-400">
                                Welcome back,{' '}
                                <span className="text-white">
                                    {auth.user.name}
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="hidden items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 sm:inline-flex">
                            Admin
                        </span>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto bg-slate-950">
                    {children}
                </main>
            </div>
        </div>
    );
}
