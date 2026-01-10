import AdminLayout from '@/layouts/admin/admin-layout';
import { Head, router, usePage } from '@inertiajs/react';
import { CheckCircle, Clock, TrendingUp, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Registration {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    experience_level: 'beginner' | 'intermediate' | 'advanced' | string;
    status: 'pending' | 'approved' | 'rejected';
    bootcamp: { title: string };
}

interface Props {
    registrations: Registration[];
}

function Pill({
    children,
    color,
}: {
    children: string;
    color: 'green' | 'yellow' | 'red' | 'blue';
}) {
    const map = {
        green: 'bg-emerald-500/90 text-emerald-950',
        yellow: 'bg-amber-400/90 text-amber-950',
        red: 'bg-rose-500/90 text-rose-50',
        blue: 'bg-sky-500/90 text-sky-950',
    } as const;
    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${map[color]}`}
        >
            {children}
        </span>
    );
}

function StatusBadge({ status }: { status: Registration['status'] }) {
    const color =
        status === 'approved'
            ? 'green'
            : status === 'rejected'
              ? 'red'
              : 'yellow';
    return <Pill color={color}>{status}</Pill>;
}

export default function Index({ registrations }: Props) {
    const { props } = usePage<{ flash?: { success?: string } }>();
    const flash = props.flash ?? {};
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState<string>('');

    const stats = useMemo(() => {
        const total = registrations.length;
        const pending = registrations.filter(
            (r) => r.status === 'pending',
        ).length;
        const approved = registrations.filter(
            (r) => r.status === 'approved',
        ).length;
        const rejected = registrations.filter(
            (r) => r.status === 'rejected',
        ).length;
        return { total, pending, approved, rejected };
    }, [registrations]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return registrations
            .filter((r) => (status ? r.status === status : true))
            .filter((r) =>
                q
                    ? [r.full_name, r.email, r.phone, r.bootcamp?.title]
                          .filter(Boolean)
                          .some((v) => v.toLowerCase().includes(q))
                    : true,
            );
    }, [registrations, query, status]);

    const act = (id: number, type: 'approve' | 'reject') => {
        router.post(
            `/dashboard/registrations/${id}/${type}`,
            {},
            { preserveScroll: true },
        );
    };

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            <div className="space-y-6 p-6">
                {flash?.success && (
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400 shadow-lg">
                        {flash.success}
                    </div>
                )}

                {/* Stats Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Total Registrations
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    {stats.total}
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                                <TrendingUp className="h-6 w-6 text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Pending
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    {stats.pending}
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                                <Clock className="h-6 w-6 text-amber-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Approved
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    {stats.approved}
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                                <CheckCircle className="h-6 w-6 text-emerald-400" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-400">
                                    Rejected
                                </p>
                                <p className="mt-2 text-3xl font-bold text-white">
                                    {stats.rejected}
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10">
                                <XCircle className="h-6 w-6 text-rose-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <div className="border-b border-slate-800 p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    Bootcamp Registrations
                                </h2>
                                <p className="mt-1 text-sm text-slate-400">
                                    Manage and review all bootcamp applications
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                <div className="relative sm:w-64">
                                    <input
                                        value={query}
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        placeholder="Search registrations..."
                                        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                        aria-label="Search registrations"
                                    />
                                </div>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                    aria-label="Filter by status"
                                >
                                    <option value="" className="bg-slate-900">
                                        All statuses
                                    </option>
                                    <option
                                        value="pending"
                                        className="bg-slate-900"
                                    >
                                        Pending
                                    </option>
                                    <option
                                        value="approved"
                                        className="bg-slate-900"
                                    >
                                        Approved
                                    </option>
                                    <option
                                        value="rejected"
                                        className="bg-slate-900"
                                    >
                                        Rejected
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {filtered.length === 0 ? (
                            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center">
                                <p className="text-lg font-medium text-white">
                                    No registrations found
                                </p>
                                <p className="mt-2 text-sm text-slate-400">
                                    Try adjusting your search or filters.
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* Desktop Table */}
                                <div className="hidden overflow-x-auto md:block">
                                    <table className="w-full text-sm">
                                        <thead className="border-b border-slate-800">
                                            <tr className="text-left">
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Name
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Email
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Phone
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Experience
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Bootcamp
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Status
                                                </th>
                                                <th className="pb-3 font-medium text-slate-400">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800">
                                            {filtered.map((r) => (
                                                <tr
                                                    key={r.id}
                                                    className="transition-colors hover:bg-slate-800/30"
                                                >
                                                    <td className="py-4 font-medium text-white">
                                                        {r.full_name}
                                                    </td>
                                                    <td className="py-4 text-slate-300">
                                                        {r.email}
                                                    </td>
                                                    <td className="py-4 text-slate-300">
                                                        {r.phone}
                                                    </td>
                                                    <td className="py-4 text-slate-300 capitalize">
                                                        {r.experience_level}
                                                    </td>
                                                    <td className="py-4 text-slate-300">
                                                        {r.bootcamp?.title}
                                                    </td>
                                                    <td className="py-4">
                                                        <StatusBadge
                                                            status={r.status}
                                                        />
                                                    </td>
                                                    <td className="py-4">
                                                        {r.status ===
                                                        'pending' ? (
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() =>
                                                                        act(
                                                                            r.id,
                                                                            'approve',
                                                                        )
                                                                    }
                                                                    className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
                                                                >
                                                                    Approve
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        act(
                                                                            r.id,
                                                                            'reject',
                                                                        )
                                                                    }
                                                                    className="rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-rose-600"
                                                                >
                                                                    Reject
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <span className="text-xs text-slate-500">
                                                                —
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards */}
                                <div className="grid gap-4 md:hidden">
                                    {filtered.map((r) => (
                                        <div
                                            key={r.id}
                                            className="rounded-lg border border-slate-800 bg-slate-800/30 p-4"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        {r.full_name}
                                                    </p>
                                                    <p className="text-sm text-slate-400">
                                                        {r.email}
                                                    </p>
                                                </div>
                                                <StatusBadge
                                                    status={r.status}
                                                />
                                            </div>
                                            <div className="mt-3 space-y-1 text-sm text-slate-300">
                                                <p>
                                                    <span className="text-slate-500">
                                                        Phone:
                                                    </span>{' '}
                                                    {r.phone}
                                                </p>
                                                <p>
                                                    <span className="text-slate-500">
                                                        Bootcamp:
                                                    </span>{' '}
                                                    {r.bootcamp?.title}
                                                </p>
                                                <p className="capitalize">
                                                    <span className="text-slate-500">
                                                        Experience:
                                                    </span>{' '}
                                                    {r.experience_level}
                                                </p>
                                            </div>
                                            {r.status === 'pending' && (
                                                <div className="mt-4 flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            act(r.id, 'approve')
                                                        }
                                                        className="flex-1 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            act(r.id, 'reject')
                                                        }
                                                        className="flex-1 rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-600"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
