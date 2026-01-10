import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    Clock,
    DollarSign,
    MapPin,
    Users,
    XCircle,
} from 'lucide-react';

interface Bootcamp {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    price: number | null;
    status: 'open' | 'closed';
    location?: string;
    capacity?: number;
}

interface Props {
    bootcamp: Bootcamp;
    hasRegistered: boolean;
}

export default function Show({ bootcamp, hasRegistered }: Props) {
    // Format dates nicely
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Calculate duration
    const calculateDuration = () => {
        const start = new Date(bootcamp.start_date);
        const end = new Date(bootcamp.end_date);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;

        if (weeks > 0 && days > 0) {
            return `${weeks} week${weeks > 1 ? 's' : ''} ${days} day${days > 1 ? 's' : ''}`;
        } else if (weeks > 0) {
            return `${weeks} week${weeks > 1 ? 's' : ''}`;
        } else {
            return `${days} day${days > 1 ? 's' : ''}`;
        }
    };

    return (
        <>
            <Head title={bootcamp.title} />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                {/* Header with back button */}
                <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                    <div className="mx-auto max-w-7xl px-6 py-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Card className="overflow-hidden border-slate-200 shadow-lg dark:border-slate-800">
                                <CardContent className="p-8">
                                    {/* Status Badge */}
                                    <div className="mb-4">
                                        <Badge
                                            variant={
                                                bootcamp.status === 'open'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                            className={
                                                bootcamp.status === 'open'
                                                    ? 'bg-emerald-500 hover:bg-emerald-600'
                                                    : 'bg-slate-500'
                                            }
                                        >
                                            {bootcamp.status === 'open' ? (
                                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                            ) : (
                                                <XCircle className="mr-1 h-3 w-3" />
                                            )}
                                            {bootcamp.status === 'open'
                                                ? 'Registration Open'
                                                : 'Registration Closed'}
                                        </Badge>
                                    </div>

                                    {/* Title */}
                                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                                        {bootcamp.title}
                                    </h1>

                                    {/* Description */}
                                    <div className="prose prose-slate dark:prose-invert mb-8 max-w-none">
                                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                            {bootcamp.description}
                                        </p>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {/* Start Date */}
                                        <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                                            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                                                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    Start Date
                                                </p>
                                                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                                    {formatDate(
                                                        bootcamp.start_date,
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {/* End Date */}
                                        <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                                            <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                                                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    End Date
                                                </p>
                                                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                                    {formatDate(
                                                        bootcamp.end_date,
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Duration */}
                                        <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                                            <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                                                <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    Duration
                                                </p>
                                                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                                    {calculateDuration()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Location (if available) */}
                                        {bootcamp.location && (
                                            <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                                                <div className="rounded-full bg-rose-100 p-2 dark:bg-rose-900/30">
                                                    <MapPin className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                        Location
                                                    </p>
                                                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                                        {bootcamp.location}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Capacity (if available) */}
                                        {bootcamp.capacity && (
                                            <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                                                <div className="rounded-full bg-cyan-100 p-2 dark:bg-cyan-900/30">
                                                    <Users className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                        Capacity
                                                    </p>
                                                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                                                        {bootcamp.capacity}{' '}
                                                        students
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-6">
                                <Card className="overflow-hidden border-slate-200 shadow-lg dark:border-slate-800">
                                    <CardContent className="p-8">
                                        {/* Price */}
                                        <div className="mb-8 text-center">
                                            <div className="mb-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                                                <DollarSign className="h-4 w-4" />
                                                Price
                                            </div>
                                            <div className="text-5xl font-bold text-slate-900 dark:text-slate-100">
                                                {bootcamp.price ? (
                                                    <>
                                                        {bootcamp.price}
                                                        <span className="ml-2 text-2xl font-normal text-slate-500">
                                                            ETB
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span className="text-emerald-600 dark:text-emerald-400">
                                                        Free
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        {hasRegistered ? (
                                            <Button
                                                size="lg"
                                                disabled
                                                className="w-full bg-emerald-600 text-white dark:bg-emerald-700"
                                            >
                                                <CheckCircle2 className="mr-2 h-5 w-5" />
                                                Already Registered
                                            </Button>
                                        ) : bootcamp.status === 'open' ? (
                                            <Link
                                                href={`/bootcamps/${bootcamp.id}/register`}
                                            >
                                                <Button
                                                    size="lg"
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                                                >
                                                    Register Now
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                size="lg"
                                                disabled
                                                className="w-full"
                                            >
                                                <XCircle className="mr-2 h-5 w-5" />
                                                Registration Closed
                                            </Button>
                                        )}

                                        {/* Additional Info */}
                                        <div className="mt-8 space-y-4 border-t border-slate-200 pt-8 dark:border-slate-700">
                                            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                                    <strong className="text-slate-900 dark:text-slate-100">
                                                        💡 Pro Tip:
                                                    </strong>{' '}
                                                    Register early to secure
                                                    your spot!
                                                </p>
                                            </div>
                                            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                                    <strong className="text-slate-900 dark:text-slate-100">
                                                        📧 Questions?
                                                    </strong>{' '}
                                                    Contact us for more
                                                    information.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
