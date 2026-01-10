import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, BookOpen, ArrowRight } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Bootcamp {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    price: number | null;
    status: 'open' | 'closed';
}

interface Registration {
    id: number;
    bootcamp_id: number;
    full_name: string;
    email: string;
    phone: string;
    experience_level: 'beginner' | 'intermediate' | 'advanced';
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    bootcamp: Bootcamp;
}

interface Props {
    registrations: Registration[];
}

export default function Dashboard({ registrations }: Props) {
    const getStatusConfig = (status: Registration['status']) => {
        switch (status) {
            case 'approved':
                return {
                    icon: CheckCircle2,
                    label: 'Approved',
                    bgColor: 'bg-emerald-500/10',
                    textColor: 'text-emerald-400',
                    ringColor: 'ring-emerald-500/20',
                };
            case 'rejected':
                return {
                    icon: XCircle,
                    label: 'Rejected',
                    bgColor: 'bg-red-500/10',
                    textColor: 'text-red-400',
                    ringColor: 'ring-red-500/20',
                };
            default:
                return {
                    icon: Clock,
                    label: 'Pending',
                    bgColor: 'bg-amber-500/10',
                    textColor: 'text-amber-400',
                    ringColor: 'ring-amber-500/20',
                };
        }
    };

    const getExperienceLabel = (level: Registration['experience_level']) => {
        return level.charAt(0).toUpperCase() + level.slice(1);
    };

    const stats = [
        {
            label: 'Total Registrations',
            value: registrations.length,
            icon: BookOpen,
            color: 'blue',
        },
        {
            label: 'Approved',
            value: registrations.filter((r) => r.status === 'approved').length,
            icon: CheckCircle2,
            color: 'emerald',
        },
        {
            label: 'Pending',
            value: registrations.filter((r) => r.status === 'pending').length,
            icon: Clock,
            color: 'amber',
        },
        {
            label: 'Rejected',
            value: registrations.filter((r) => r.status === 'rejected').length,
            icon: XCircle,
            color: 'red',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-slate-950 p-6">
                <div className="mx-auto max-w-7xl space-y-6">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            My Dashboard
                        </h1>
                        <p className="mt-2 text-slate-400">
                            Track your bootcamp registrations and status
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-slate-400">
                                                {stat.label}
                                            </p>
                                            <p className="mt-2 text-3xl font-bold text-white">
                                                {stat.value}
                                            </p>
                                        </div>
                                        <div className={`rounded-lg bg-${stat.color}-500/10 p-3`}>
                                            <Icon className={`h-6 w-6 text-${stat.color}-400`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Registrations */}
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                        <div className="border-b border-slate-800 p-6">
                            <h2 className="text-xl font-semibold text-white">
                                My Registrations
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">
                                View all your bootcamp applications
                            </p>
                        </div>

                        <div className="p-6">
                            {registrations.length > 0 ? (
                                <div className="space-y-4">
                                    {registrations.map((registration) => {
                                        const statusConfig = getStatusConfig(registration.status);
                                        const StatusIcon = statusConfig.icon;

                                        return (
                                            <div
                                                key={registration.id}
                                                className="group rounded-xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-800"
                                            >
                                                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                                    {/* Left: Bootcamp Info */}
                                                    <div className="flex-1">
                                                        <div className="mb-3 flex items-start justify-between">
                                                            <h3 className="text-xl font-semibold text-white">
                                                                {registration.bootcamp.title}
                                                            </h3>
                                                            <span
                                                                className={`ml-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusConfig.bgColor} ${statusConfig.textColor} ring-1 ${statusConfig.ringColor}`}
                                                            >
                                                                <StatusIcon className="h-3 w-3" />
                                                                {statusConfig.label}
                                                            </span>
                                                        </div>

                                                        <p className="mb-4 text-sm text-slate-400">
                                                            {registration.bootcamp.description}
                                                        </p>

                                                        <div className="grid gap-3 sm:grid-cols-2">
                                                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                                                <Calendar className="h-4 w-4 text-slate-500" />
                                                                <span>
                                                                    {registration.bootcamp.start_date} –{' '}
                                                                    {registration.bootcamp.end_date}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                                                <AlertCircle className="h-4 w-4 text-slate-500" />
                                                                <span>
                                                                    Experience: {getExperienceLabel(registration.experience_level)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right: Action */}
                                                    <div className="flex items-center gap-3">
                                                        <Link
                                                            href={`/bootcamps/${registration.bootcamp.id}`}
                                                            className="group/btn inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-all hover:border-slate-600 hover:bg-slate-700"
                                                        >
                                                            View Details
                                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Registration Date */}
                                                <div className="mt-4 border-t border-slate-700 pt-3">
                                                    <p className="text-xs text-slate-500">
                                                        Registered on {new Date(registration.created_at).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <BookOpen className="mx-auto h-12 w-12 text-slate-600" />
                                    <h3 className="mt-4 text-lg font-semibold text-white">
                                        No registrations yet
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400">
                                        Start your learning journey by registering for a bootcamp
                                    </p>
                                    <Link
                                        href="/"
                                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                                    >
                                        Browse Bootcamps
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
