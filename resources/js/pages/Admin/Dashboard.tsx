import AdminLayout from '@/layouts/admin/admin-layout';
import { Head, Link } from '@inertiajs/react';
import {
    Activity,
    ArrowRight,
    Calendar,
    TrendingUp,
    Users,
} from 'lucide-react';

interface Props {
    stats: {
        totalUsers: number;
        activeBootcamps: number;
        totalRegistrations: number;
        pendingRegistrations: number;
    };
}

export default function Dashboard({ stats }: Props) {
    const statCards = [
        {
            label: 'Total Users',
            value: stats.totalUsers,
            icon: Users,
            bgColor: 'rgba(59, 130, 246, 0.1)',
            iconColor: '#3b82f6',
        },
        {
            label: 'Active Bootcamps',
            value: stats.activeBootcamps,
            icon: Calendar,
            iconColor: '#10b981',
            bgColor: 'rgba(16, 185, 129, 0.1)',
        },
        {
            label: 'Registrations',
            value: stats.totalRegistrations,
            icon: TrendingUp,
            bgColor: 'rgba(255, 179, 0, 0.1)',
            iconColor: '#FFB300',
        },
        {
            label: 'Pending',
            value: stats.pendingRegistrations,
            icon: Activity,
            bgColor: 'rgba(168, 85, 247, 0.1)',
            iconColor: '#a855f7',
        },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            <div
                className="space-y-6 p-6"
                style={{ backgroundColor: '#0B1226' }}
            >
                {/* Welcome Section */}
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Dashboard Overview
                    </h1>
                    <p className="mt-1 text-sm" style={{ color: '#F4F4F4' }}>
                        Welcome to the Bootcamp Admin Dashboard
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="rounded-xl border p-6 backdrop-blur-sm"
                                style={{
                                    borderColor: 'rgba(247, 166, 0, 0.2)',
                                    backgroundColor: 'rgba(11, 18, 38, 0.8)',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p
                                            className="text-sm font-medium"
                                            style={{ color: '#F4F4F4' }}
                                        >
                                            {stat.label}
                                        </p>
                                        <p className="mt-2 text-3xl font-bold text-white">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: stat.bgColor,
                                        }}
                                    >
                                        <Icon
                                            className="h-6 w-6"
                                            style={{ color: stat.iconColor }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Actions */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Registrations Card */}
                    <Link
                        href="/dashboard/registrations"
                        className="group rounded-xl border p-6 backdrop-blur-sm transition-all"
                        style={{
                            borderColor: 'rgba(247, 166, 0, 0.2)',
                            backgroundColor: 'rgba(11, 18, 38, 0.5)',
                        }}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full transition-colors"
                                    style={{
                                        backgroundColor:
                                            'rgba(16, 185, 129, 0.1)',
                                    }}
                                >
                                    <Users
                                        className="h-6 w-6"
                                        style={{ color: '#10b981' }}
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    Manage Registrations
                                </h3>
                                <p
                                    className="mt-1 text-sm"
                                    style={{ color: '#F4F4F4' }}
                                >
                                    Review and process bootcamp registration
                                    applications
                                </p>
                            </div>
                            <ArrowRight
                                className="h-5 w-5 transition-colors"
                                style={{ color: '#F7A600' }}
                            />
                        </div>
                    </Link>

                    {/* Bootcamps Card */}
                    <Link
                        href="/dashboard/bootcamps"
                        className="group rounded-xl border p-6 backdrop-blur-sm transition-all"
                        style={{
                            borderColor: 'rgba(247, 166, 0, 0.2)',
                            backgroundColor: 'rgba(11, 18, 38, 0.5)',
                        }}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full transition-colors"
                                    style={{
                                        backgroundColor:
                                            'rgba(59, 130, 246, 0.1)',
                                    }}
                                >
                                    <Calendar
                                        className="h-6 w-6"
                                        style={{ color: '#3b82f6' }}
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    Manage Bootcamps
                                </h3>
                                <p
                                    className="mt-1 text-sm"
                                    style={{ color: '#F4F4F4' }}
                                >
                                    Create and manage bootcamp programs
                                </p>
                            </div>
                            <ArrowRight
                                className="h-5 w-5 transition-colors"
                                style={{ color: '#F7A600' }}
                            />
                        </div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div
                    className="rounded-xl border backdrop-blur-sm"
                    style={{
                        borderColor: 'rgba(247, 166, 0, 0.2)',
                        backgroundColor: 'rgba(11, 18, 38, 0.5)',
                    }}
                >
                    <div
                        className="border-b p-6"
                        style={{ borderColor: 'rgba(247, 166, 0, 0.2)' }}
                    >
                        <h2 className="text-lg font-semibold text-white">
                            Recent Activity
                        </h2>
                        <p
                            className="mt-1 text-sm"
                            style={{ color: '#F4F4F4' }}
                        >
                            Latest updates and changes
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-center py-12">
                            <p className="text-sm" style={{ color: '#F4F4F4' }}>
                                No recent activity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
