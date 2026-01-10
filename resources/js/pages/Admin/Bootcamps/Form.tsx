import AdminLayout from '@/layouts/admin/admin-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { FormEvent } from 'react';

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
    bootcamp: Bootcamp | null;
}

export default function Form({ bootcamp }: Props) {
    const isEditing = !!bootcamp;

    const { data, setData, post, patch, processing, errors } = useForm({
        title: bootcamp?.title || '',
        description: bootcamp?.description || '',
        start_date: bootcamp?.start_date || '',
        end_date: bootcamp?.end_date || '',
        location: bootcamp?.location || '',
        capacity: bootcamp?.capacity || 20,
        price: bootcamp?.price || 0,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (isEditing) {
            patch(`/dashboard/bootcamps/${bootcamp.id}`, {
                preserveScroll: true,
            });
        } else {
            post('/dashboard/bootcamps', {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title={isEditing ? 'Edit Bootcamp' : 'Create Bootcamp'} />
            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/bootcamps"
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            {isEditing
                                ? 'Edit Bootcamp'
                                : 'Create New Bootcamp'}
                        </h1>
                        <p className="mt-1 text-sm text-slate-400">
                            {isEditing
                                ? 'Update bootcamp information'
                                : 'Add a new bootcamp program'}
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6 p-6">
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-slate-300"
                            >
                                Title <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                placeholder="e.g., Full-Stack Web Development Bootcamp"
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-slate-300"
                            >
                                Description{' '}
                                <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                rows={4}
                                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                placeholder="Describe the bootcamp program..."
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Dates */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="start_date"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    Start Date{' '}
                                    <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="start_date"
                                    value={data.start_date}
                                    onChange={(e) =>
                                        setData('start_date', e.target.value)
                                    }
                                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                />
                                {errors.start_date && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.start_date}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="end_date"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    End Date{' '}
                                    <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="end_date"
                                    value={data.end_date}
                                    onChange={(e) =>
                                        setData('end_date', e.target.value)
                                    }
                                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                />
                                {errors.end_date && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.end_date}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-slate-300"
                            >
                                Location <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="location"
                                value={data.location}
                                onChange={(e) =>
                                    setData('location', e.target.value)
                                }
                                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                placeholder="e.g., San Francisco, CA or Online"
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.location}
                                </p>
                            )}
                        </div>

                        {/* Capacity and Price */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="capacity"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    Capacity{' '}
                                    <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="capacity"
                                    value={data.capacity}
                                    onChange={(e) =>
                                        setData(
                                            'capacity',
                                            parseInt(e.target.value) || 0,
                                        )
                                    }
                                    min="1"
                                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                />
                                {errors.capacity && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.capacity}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    Price (USD){' '}
                                    <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData(
                                            'price',
                                            parseFloat(e.target.value) || 0,
                                        )
                                    }
                                    min="0"
                                    step="0.01"
                                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                                />
                                {errors.price && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.price}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 disabled:opacity-50"
                            >
                                {processing
                                    ? 'Saving...'
                                    : isEditing
                                      ? 'Update Bootcamp'
                                      : 'Create Bootcamp'}
                            </button>
                            <Link
                                href="/dashboard/bootcamps"
                                className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
