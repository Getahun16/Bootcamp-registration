import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
        <div
            className="flex min-h-svh flex-col"
            style={{ backgroundColor: '#0B1226' }}
        >
            <Header />
            <main className="flex flex-1 flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="w-full max-w-md">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-6">
                            <div className="space-y-3 text-center">
                                <h1 className="text-2xl font-bold tracking-tight text-white">
                                    {title}
                                </h1>
                                <p className="text-center text-sm text-slate-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div
                            className="rounded-2xl border p-8 shadow-xl"
                            style={{
                                borderColor: 'rgba(247, 166, 0, 0.2)',
                                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
