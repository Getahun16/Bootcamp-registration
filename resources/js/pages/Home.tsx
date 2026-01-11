import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link, usePage } from '@inertiajs/react';
import {
    AlertCircle,
    ArrowRight,
    BookOpen,
    Calendar,
    CheckCircle2,
    Clock,
    Code2,
    DollarSign,
    Sparkles,
    Trophy,
    Users,
    XCircle,
    Zap,
} from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
}

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
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    bootcamp: Bootcamp;
    experience_level: string;
}

interface Props {
    bootcamps: Bootcamp[];
    userRegistrations: Registration[];
}

export default function Home({ bootcamps, userRegistrations }: Props) {
    const { auth } = usePage<{ auth: { user: User | null } }>().props;
    // Helper function to check if user has already registered for a bootcamp
    const hasRegistered = (bootcampId: number) => {
        return userRegistrations.some((reg) => reg.bootcamp_id === bootcampId);
    };
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
                    label: 'Pending Review',
                    bgColor: 'bg-amber-500/10',
                    textColor: 'text-amber-400',
                    ringColor: 'ring-amber-500/20',
                };
        }
    };

    return (
        <>
            <Header />
            <div
                className="min-h-screen"
                style={{ backgroundColor: '#0B1226' }}
            >
                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div
                            className="absolute inset-0 animate-pulse"
                            style={{
                                background:
                                    'linear-gradient(to bottom right, rgba(247, 166, 0, 0.15), rgba(255, 179, 0, 0.15), rgba(247, 166, 0, 0.1))',
                            }}
                        />
                        <div
                            className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full mix-blend-multiply blur-3xl filter"
                            style={{
                                backgroundColor: 'rgba(247, 166, 0, 0.25)',
                            }}
                        />
                        <div
                            className="animation-delay-2000 animate-blob absolute top-0 -right-4 h-72 w-72 rounded-full mix-blend-multiply blur-3xl filter"
                            style={{
                                backgroundColor: 'rgba(255, 179, 0, 0.25)',
                            }}
                        />
                        <div
                            className="animation-delay-4000 animate-blob absolute -bottom-8 left-20 h-72 w-72 rounded-full mix-blend-multiply blur-3xl filter"
                            style={{
                                backgroundColor: 'rgba(247, 166, 0, 0.2)',
                            }}
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
                        <div className="text-center">
                            <div
                                className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
                                style={{
                                    borderColor: 'rgba(247, 166, 0, 0.2)',
                                    backgroundColor: 'rgba(247, 166, 0, 0.1)',
                                }}
                            >
                                <Sparkles
                                    className="h-4 w-4"
                                    style={{ color: '#FFB300' }}
                                />
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: '#FFB300' }}
                                >
                                    Transform Your Career in Tech
                                </span>
                            </div>

                            <h1
                                className="mb-6 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
                                style={{
                                    background:
                                        'linear-gradient(to right, #FFFFFF, #FFB300, #F7A600)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Master Modern
                                <br />
                                Web Development
                            </h1>

                            <p
                                className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl"
                                style={{ color: '#F4F4F4' }}
                            >
                                Build production-ready applications with{' '}
                                <span
                                    className="font-semibold"
                                    style={{ color: '#F7A600' }}
                                >
                                    Laravel 12
                                </span>
                                ,{' '}
                                <span
                                    className="font-semibold"
                                    style={{ color: '#FFB300' }}
                                >
                                    React 19
                                </span>
                                , and{' '}
                                <span
                                    className="font-semibold"
                                    style={{ color: '#F7A600' }}
                                >
                                    modern tools
                                </span>
                                . Learn from industry experts and launch your
                                tech career.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href="#bootcamps"
                                    className="group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
                                    style={{
                                        background:
                                            'linear-gradient(to right, #F7A600, #FFB300)',
                                        boxShadow:
                                            '0 10px 40px rgba(247, 166, 0, 0.3)',
                                    }}
                                >
                                    Explore Bootcamps
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="#features"
                                    className="inline-flex items-center gap-2 rounded-full border px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all"
                                    style={{
                                        borderColor: 'rgba(247, 166, 0, 0.3)',
                                        backgroundColor:
                                            'rgba(247, 166, 0, 0.1)',
                                    }}
                                >
                                    Learn More
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                                {[
                                    {
                                        label: 'Students Trained',
                                        value: '500+',
                                    },
                                    { label: 'Success Rate', value: '95%' },
                                    { label: 'Live Projects', value: '50+' },
                                    { label: 'Expert Mentors', value: '20+' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center"
                                    >
                                        <div className="text-3xl font-bold text-white sm:text-4xl">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-sm text-slate-400">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= FEATURES ================= */}
                <section
                    id="features"
                    className="relative border-y border-slate-800 bg-slate-900/50 py-20 backdrop-blur-sm"
                >
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Why Choose Our Bootcamp?
                            </h2>
                            <p className="text-lg text-slate-400">
                                Everything you need to become a professional
                                developer
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: Code2,
                                    title: 'Hands-on Projects',
                                    description:
                                        'Build real-world applications from scratch and deploy them to production',
                                    color: 'emerald',
                                },
                                {
                                    icon: Users,
                                    title: 'Expert Mentorship',
                                    description:
                                        'Learn from industry professionals with years of experience',
                                    color: 'blue',
                                },
                                {
                                    icon: Zap,
                                    title: 'Fast-Track Learning',
                                    description:
                                        'Intensive curriculum designed to get you job-ready quickly',
                                    color: 'purple',
                                },
                                {
                                    icon: Trophy,
                                    title: 'Career Support',
                                    description:
                                        'Portfolio building, interview prep, and job placement assistance',
                                    color: 'amber',
                                },
                                {
                                    icon: BookOpen,
                                    title: 'Lifetime Access',
                                    description:
                                        'Keep learning with updated content and community support',
                                    color: 'pink',
                                },
                                {
                                    icon: CheckCircle2,
                                    title: 'Certificate',
                                    description:
                                        'Earn a recognized certificate upon successful completion',
                                    color: 'teal',
                                },
                            ].map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={feature.title}
                                        className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-800/50"
                                    >
                                        <div
                                            className={`mb-4 inline-flex rounded-xl bg-${feature.color}-500/10 p-3`}
                                        >
                                            <Icon
                                                className={`h-6 w-6 text-${feature.color}-400`}
                                            />
                                        </div>
                                        <h3 className="mb-3 text-xl font-semibold text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ================= MY REGISTRATIONS (for logged-in users) ================= */}
                {auth?.user && userRegistrations.length > 0 && (
                    <section className="relative border-y border-slate-800 bg-slate-900/30 py-20">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                    My Registrations
                                </h2>
                                <p className="text-lg text-slate-400">
                                    Track the status of your bootcamp
                                    applications
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {userRegistrations.map((registration) => {
                                    const statusConfig = getStatusConfig(
                                        registration.status,
                                    );
                                    const StatusIcon = statusConfig.icon;

                                    return (
                                        <div
                                            key={registration.id}
                                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700"
                                        >
                                            {/* Status Badge */}
                                            <div className="mb-4 flex items-center justify-between">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusConfig.bgColor} ${statusConfig.textColor} ring-1 ${statusConfig.ringColor}`}
                                                >
                                                    <StatusIcon className="h-3 w-3" />
                                                    {statusConfig.label}
                                                </span>
                                            </div>

                                            {/* Bootcamp Info */}
                                            <h3 className="mb-3 text-xl font-bold text-white">
                                                {registration.bootcamp.title}
                                            </h3>

                                            <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                                                {
                                                    registration.bootcamp
                                                        .description
                                                }
                                            </p>

                                            {/* Details */}
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <Calendar className="h-4 w-4 text-slate-500" />
                                                    <span className="text-xs">
                                                        {
                                                            registration
                                                                .bootcamp
                                                                .start_date
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <AlertCircle className="h-4 w-4 text-slate-500" />
                                                    <span className="text-xs">
                                                        Registered on{' '}
                                                        {new Date(
                                                            registration.created_at,
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* View Details Link */}
                                            <Link
                                                href={`/bootcamps/${registration.bootcamp.id}`}
                                                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                                            >
                                                View Details
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ================= BOOTCAMPS ================= */}
                <section id="bootcamps" className="relative py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Available Bootcamps
                            </h2>
                            <p className="text-lg text-slate-400">
                                Choose the program that aligns with your career
                                goals
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {bootcamps.map((bootcamp) => (
                                <div
                                    key={bootcamp.id}
                                    className="group relative overflow-hidden rounded-2xl border p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
                                    style={{
                                        borderColor: 'rgba(247, 166, 0, 0.2)',
                                        backgroundColor:
                                            'rgba(11, 18, 38, 0.8)',
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background:
                                                    'linear-gradient(to bottom right, rgba(247, 166, 0, 0.05), rgba(255, 179, 0, 0.05))',
                                            }}
                                        />
                                    </div>

                                    {/* Status badge */}
                                    <div className="relative mb-6 flex items-center justify-between">
                                        <span
                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                                            style={
                                                bootcamp.status === 'open'
                                                    ? {
                                                          backgroundColor:
                                                              'rgba(247, 166, 0, 0.1)',
                                                          color: '#F7A600',
                                                          border: '1px solid rgba(247, 166, 0, 0.2)',
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              'rgba(239, 68, 68, 0.1)',
                                                          color: '#ef4444',
                                                          border: '1px solid rgba(239, 68, 68, 0.2)',
                                                      }
                                            }
                                        >
                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        bootcamp.status ===
                                                        'open'
                                                            ? '#F7A600'
                                                            : '#ef4444',
                                                }}
                                            />
                                            {bootcamp.status === 'open'
                                                ? 'Open for Registration'
                                                : 'Registration Closed'}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            {bootcamp.title}
                                        </h3>

                                        <p className="mb-6 leading-relaxed text-slate-400">
                                            {bootcamp.description}
                                        </p>

                                        {/* Details */}
                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                                <Calendar className="h-4 w-4 text-slate-500" />
                                                <span>
                                                    {bootcamp.start_date} –{' '}
                                                    {bootcamp.end_date}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <DollarSign
                                                    className="h-4 w-4"
                                                    style={{ color: '#F4F4F4' }}
                                                />
                                                <span
                                                    className="font-semibold"
                                                    style={{ color: '#F7A600' }}
                                                >
                                                    {bootcamp.price
                                                        ? `${bootcamp.price.toLocaleString()} ETB`
                                                        : 'Free'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="relative">
                                            {bootcamp.status === 'open' ? (
                                                auth?.user ? (
                                                    hasRegistered(
                                                        bootcamp.id,
                                                    ) ? (
                                                        <button
                                                            disabled
                                                            className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-semibold"
                                                            style={{
                                                                borderColor:
                                                                    'rgba(247, 166, 0, 0.2)',
                                                                backgroundColor:
                                                                    'rgba(247, 166, 0, 0.1)',
                                                                color: '#F7A600',
                                                            }}
                                                        >
                                                            <CheckCircle2 className="h-4 w-4" />
                                                            Already Registered
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            href={`/bootcamps/${bootcamp.id}/register`}
                                                            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105"
                                                            style={{
                                                                background:
                                                                    'linear-gradient(to right, #F7A600, #FFB300)',
                                                                boxShadow:
                                                                    '0 10px 25px rgba(247, 166, 0, 0.25)',
                                                            }}
                                                        >
                                                            Register Now
                                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                        </Link>
                                                    )
                                                ) : (
                                                    <Link
                                                        href="/login"
                                                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105"
                                                        style={{
                                                            background:
                                                                'linear-gradient(to right, #F7A600, #FFB300)',
                                                            boxShadow:
                                                                '0 10px 25px rgba(247, 166, 0, 0.25)',
                                                        }}
                                                    >
                                                        Login to Register
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                    </Link>
                                                )
                                            ) : (
                                                <button
                                                    disabled
                                                    className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3.5 font-semibold text-slate-500"
                                                >
                                                    Registration Closed
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {bootcamps.length === 0 && (
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center backdrop-blur-sm">
                                <p className="text-lg text-slate-400">
                                    No bootcamps available at the moment. Check
                                    back soon!
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 -left-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
                        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-4xl px-6 text-center">
                        <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="mb-8 text-lg text-slate-300">
                            Join hundreds of students who have transformed their
                            careers.
                            <br className="hidden sm:block" />
                            Limited seats available – secure your spot today!
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#bootcamps"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 hover:shadow-emerald-500/40"
                            >
                                Join a Bootcamp
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a
                                href="/bootcamps"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800"
                            >
                                View All Programs
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
