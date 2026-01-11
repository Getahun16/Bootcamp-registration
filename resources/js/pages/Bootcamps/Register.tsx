import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { type User } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { RegistrationPayload } from '../../types/registration';

interface Props {
    bootcampId: number;
    user: User | null;
}

export default function Register({ bootcampId, user }: Props) {
    const { data, setData, post, processing, errors } =
        useForm<RegistrationPayload>({
            bootcamp_id: bootcampId,
            full_name: user?.name || '',
            email: user?.email || '',
            phone: '',
            experience_level: 'beginner',
        });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/registrations');
    }

    return (
        <>
            <Header />
            <div className="min-h-svh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
                    <section className="flex-1 space-y-4">
                        <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                            Registration
                        </p>
                        <h1 className="text-3xl leading-tight font-semibold sm:text-4xl">
                            Secure your spot in this bootcamp.
                        </h1>
                        <p className="max-w-2xl text-base text-slate-300">
                            Tell us a bit about yourself so we can tailor the
                            experience to your background. You will receive a
                            confirmation email with next steps after submitting.
                        </p>

                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
                            <form
                                onSubmit={submit}
                                className="grid gap-6 p-6 sm:p-8"
                            >
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            value={data.full_name}
                                            onChange={(e) =>
                                                setData(
                                                    'full_name',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-inner shadow-black/20 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 focus:outline-none"
                                            placeholder="Alex Johnson"
                                        />
                                        {errors.full_name && (
                                            <p className="text-sm text-amber-300">
                                                {errors.full_name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-inner shadow-black/20 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 focus:outline-none"
                                            placeholder="you@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-amber-300">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData('phone', e.target.value)
                                            }
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-inner shadow-black/20 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 focus:outline-none"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && (
                                            <p className="text-sm text-amber-300">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-white">
                                            Experience level
                                        </label>
                                        <select
                                            value={data.experience_level}
                                            onChange={(e) =>
                                                setData(
                                                    'experience_level',
                                                    e.target
                                                        .value as RegistrationPayload['experience_level'],
                                                )
                                            }
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-inner shadow-black/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 focus:outline-none"
                                        >
                                            <option
                                                value="beginner"
                                                className="bg-slate-900 text-white"
                                            >
                                                Beginner
                                            </option>
                                            <option
                                                value="intermediate"
                                                className="bg-slate-900 text-white"
                                            >
                                                Intermediate
                                            </option>
                                            <option
                                                value="advanced"
                                                className="bg-slate-900 text-white"
                                            >
                                                Advanced
                                            </option>
                                        </select>
                                        {errors.experience_level && (
                                            <p className="text-sm text-amber-300">
                                                {errors.experience_level}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing
                                        ? 'Submitting...'
                                        : 'Submit registration'}
                                </button>
                            </form>
                        </div>
                    </section>

                    <aside className="w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur">
                        <h2 className="text-lg font-semibold text-white">
                            What to expect
                        </h2>
                        <ul className="space-y-3 text-sm text-slate-200">
                            <li className="flex gap-3">
                                <span
                                    className="mt-1 h-2 w-2 rounded-full bg-emerald-400"
                                    aria-hidden
                                />
                                Live sessions with mentors and Q&A each week.
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="mt-1 h-2 w-2 rounded-full bg-cyan-400"
                                    aria-hidden
                                />
                                Access to recordings, code templates, and
                                curated resources.
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="mt-1 h-2 w-2 rounded-full bg-amber-400"
                                    aria-hidden
                                />
                                Structured assignments with feedback to keep you
                                on track.
                            </li>
                        </ul>

                        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-200">
                            Need to pick a different cohort?{' '}
                            <Link
                                href="/bootcamps"
                                className="font-semibold text-emerald-300 underline-offset-4 hover:text-emerald-200 hover:underline"
                            >
                                Browse bootcamps
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}
