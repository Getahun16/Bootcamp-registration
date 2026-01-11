import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 md:p-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="w-full max-w-md">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-6">
                        <div className="space-y-3 text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                                {title}
                            </h1>
                            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/50">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
