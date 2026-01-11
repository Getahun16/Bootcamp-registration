import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { Bootcamp } from '../../types/bootcamp';

export default function Index() {
    const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);

    useEffect(() => {
        api.get<Bootcamp[]>('/bootcamps').then((res) => {
            setBootcamps(res.data);
        });
    }, []);

    const hasBootcamps = useMemo(() => bootcamps.length > 0, [bootcamps]);

    const formatDate = (value: string) =>
        new Intl.DateTimeFormat('en', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date(value));

    const formatPrice = (price: number | null) =>
        price === null
            ? 'Free'
            : new Intl.NumberFormat('en', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
              }).format(price);

    return (
        <>
            <Header />
            <div className="min-h-svh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
                    <header className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                                Upcoming cohorts
                            </p>
                            <h1 className="text-3xl leading-tight font-semibold sm:text-4xl">
                                Level up with focused, mentor-led bootcamps.
                            </h1>
                            <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
                                Choose a cohort, secure your seat, and get
                                hands-on with real-world projects. All sessions
                                are live with recordings provided.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 ring-1 ring-white/10">
                                    <span
                                        className="h-2 w-2 rounded-full bg-emerald-400"
                                        aria-hidden
                                    />
                                    Seats open now
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 ring-1 ring-white/10">
                                    <span
                                        className="h-2 w-2 rounded-full bg-cyan-400"
                                        aria-hidden
                                    />
                                    Live weekly workshops
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 ring-1 ring-white/10">
                                    <span
                                        className="h-2 w-2 rounded-full bg-amber-400"
                                        aria-hidden
                                    />
                                    Certificates on completion
                                </span>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                            <div className="space-y-3">
                                <h2 className="text-lg font-semibold text-white">
                                    How it works
                                </h2>
                                <ol className="space-y-2 text-sm text-slate-200">
                                    <li className="flex gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white ring-1 ring-white/20">
                                            1
                                        </span>
                                        Pick a bootcamp that matches your level
                                        and focus.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white ring-1 ring-white/20">
                                            2
                                        </span>
                                        Complete a short registration form to
                                        reserve your seat.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white ring-1 ring-white/20">
                                            3
                                        </span>
                                        Get schedules, resources, and mentor
                                        access in your inbox.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </header>

                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                Bootcamps
                            </h2>
                            <p className="text-sm text-slate-300">
                                {hasBootcamps
                                    ? `${bootcamps.length} cohort${bootcamps.length > 1 ? 's' : ''} open`
                                    : 'We will publish new cohorts soon.'}
                            </p>
                        </div>

                        {!hasBootcamps ? (
                            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-10 text-center text-slate-300 shadow-inner shadow-black/30">
                                <p className="text-base font-medium text-white">
                                    No bootcamps yet
                                </p>
                                <p className="mt-2 max-w-xl text-sm text-slate-300">
                                    New cohorts are added regularly. Check back
                                    soon or join our newsletter to hear first
                                    when seats open.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {bootcamps.map((b) => {
                                    const isOpen = b.status === 'open';
                                    return (
                                        <article
                                            key={b.id}
                                            className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg ring-1 shadow-black/30 ring-transparent transition hover:-translate-y-1 hover:border-white/20 hover:ring-white/10"
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-slate-400 uppercase">
                                                    <span className="flex items-center gap-2">
                                                        <span
                                                            className={`h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-slate-500'}`}
                                                            aria-hidden
                                                        />
                                                        {isOpen
                                                            ? 'Open'
                                                            : 'Closed'}
                                                    </span>
                                                    <span className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-slate-200 ring-1 ring-white/10">
                                                        {formatPrice(b.price)}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-200">
                                                    {b.title}
                                                </h3>
                                                <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">
                                                    {b.description}
                                                </p>
                                                <div className="flex items-center gap-3 text-xs text-slate-300">
                                                    <span className="rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                                                        Starts{' '}
                                                        {formatDate(
                                                            b.start_date,
                                                        )}
                                                    </span>
                                                    <span className="rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                                                        Ends{' '}
                                                        {formatDate(b.end_date)}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                <Link
                                                    href={`/bootcamps/${b.id}/register`}
                                                    className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                    aria-disabled={!isOpen}
                                                >
                                                    {isOpen
                                                        ? 'Register now'
                                                        : 'Registration closed'}
                                                </Link>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
