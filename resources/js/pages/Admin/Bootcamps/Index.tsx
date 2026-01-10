import AdminLayout from '@/layouts/admin/admin-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import {
    Calendar,
    DollarSign,
    MapPin,
    Pencil,
    Plus,
    Trash2,
    Users,
} from 'lucide-react';
import { useState } from 'react';

interface Bootcamp {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    capacity: number;
    price: number;
}

interface Props {
    bootcamps: Bootcamp[];
}

export default function Index({ bootcamps }: Props) {
    const { props } = usePage<{ flash?: { success?: string } }>();
    const flash = props.flash ?? {};
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number, title: string) => {
        if (
            confirm(
                `Are you sure you want to delete "${title}"? This action cannot be undone.`,
            )
        ) {
            setDeletingId(id);
            router.delete(`/dashboard/bootcamps/${id}`, {
                preserveScroll: true,
                onFinish: () => setDeletingId(null),
            });
        }
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    return (
        <AdminLayout>
            <Head title="Manage Bootcamps" />
            <div className="space-y-6 p-6">
                {flash?.success && (
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400 shadow-lg">
                        {flash.success}
                    </div>
                )}

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            Bootcamps
                        </h1>
                        <p className="mt-1 text-sm text-slate-400">
                            Manage your bootcamp programs
                        </p>
                    </div>
                    <Link
                        href="/dashboard/bootcamps/create"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                    >
                        <Plus className="h-4 w-4" />
                        Add Bootcamp
                    </Link>
                </div>

                {/* Bootcamps Grid */}
                {bootcamps.length === 0 ? (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-12 text-center">
                        <p className="text-lg font-medium text-white">
                            No bootcamps yet
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                            Create your first bootcamp to get started.
                        </p>
                        <Link
                            href="/dashboard/bootcamps/create"
                            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                        >
                            <Plus className="h-4 w-4" />
                            Add Bootcamp
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {bootcamps.map((bootcamp) => (
                            <div
                                key={bootcamp.id}
                                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold text-white">
                                        {bootcamp.title}
                                    </h3>
                                    <div className="flex gap-1">
                                        <Link
                                            href={`/dashboard/bootcamps/${bootcamp.id}/edit`}
                                            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                                            title="Edit"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    bootcamp.id,
                                                    bootcamp.title,
                                                )
                                            }
                                            disabled={
                                                deletingId === bootcamp.id
                                            }
                                            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50"
                                            title="Delete"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                                    {bootcamp.description}
                                </p>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <Calendar className="h-4 w-4 text-slate-500" />
                                        <span>
                                            {formatDate(bootcamp.start_date)} -{' '}
                                            {formatDate(bootcamp.end_date)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <MapPin className="h-4 w-4 text-slate-500" />
                                        <span>{bootcamp.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-slate-300">
                                            <Users className="h-4 w-4 text-slate-500" />
                                            <span>
                                                {bootcamp.capacity} spots
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                                            <DollarSign className="h-4 w-4" />
                                            <span>
                                                {formatPrice(bootcamp.price)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
