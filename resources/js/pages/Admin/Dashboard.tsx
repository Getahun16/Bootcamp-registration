import AdminLayout from '@/layouts/admin/admin-layout';
import { Head, Link } from '@inertiajs/react';
import {
    Activity,
    ArrowRight,
    Calendar,
    TrendingUp,
    Users,
} from 'lucide-react';

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            <div className="space-y-6 p-6">
                {/* Welcome Section */}
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Dashboard Overview
                    </h1>
                    <p className="mt-1 text-sm text-slate-400">
                        Welcome to the Bootcamp Admin Dashboard
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Total Users
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    —
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                                <Users className="h-6 w-6 text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Active Bootcamps
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    —
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                                <Calendar className="h-6 w-6 text-emerald-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Registrations
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    —
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                                <TrendingUp className="h-6 w-6 text-amber-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Activity
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    —
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                                <Activity className="h-6 w-6 text-purple-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Registrations Card */}
                    <Link
                        href="/dashboard/registrations"
                        className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-slate-900"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                                    <Users className="h-6 w-6 text-emerald-400" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    Manage Registrations
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Review and process bootcamp registration
                                    applications
                                </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-600 transition-colors group-hover:text-emerald-400" />
                        </div>
                    </Link>

                    {/* Bootcamps Card */}
                    <Link
                        href="/dashboard/bootcamps"
                        className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-900"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                                    <Calendar className="h-6 w-6 text-blue-400" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    Manage Bootcamps
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Create and manage bootcamp programs
                                </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-600 transition-colors group-hover:text-blue-400" />
                        </div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <div className="border-b border-slate-800 p-6">
                        <h2 className="text-lg font-semibold text-white">
                            Recent Activity
                        </h2>
                        <p className="mt-1 text-sm text-slate-400">
                            Latest updates and changes
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-center py-12">
                            <p className="text-sm text-slate-500">
                                No recent activity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
