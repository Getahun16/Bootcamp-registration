import { Link } from '@inertiajs/react';

interface Bootcamp {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    price: number | null;
    status: 'open' | 'closed';
}

interface Props {
    bootcamp: Bootcamp;
}

export default function Show({ bootcamp }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl p-6">
                <div className="rounded bg-white p-6 shadow">
                    <h1 className="mb-4 text-3xl font-bold">
                        {bootcamp.title}
                    </h1>

                    <p className="mb-4 text-gray-700">{bootcamp.description}</p>

                    <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                        <p>
                            <strong>Start:</strong> {bootcamp.start_date}
                        </p>
                        <p>
                            <strong>End:</strong> {bootcamp.end_date}
                        </p>
                        <p>
                            <strong>Price:</strong>{' '}
                            {bootcamp.price ? `${bootcamp.price} ETB` : 'Free'}
                        </p>
                        <p>
                            <strong>Status:</strong>{' '}
                            {bootcamp.status.toUpperCase()}
                        </p>
                    </div>

                    {bootcamp.status === 'open' ? (
                        <Link
                            href={`/bootcamps/${bootcamp.id}/register`}
                            className="inline-block rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                        >
                            Register Now
                        </Link>
                    ) : (
                        <span className="inline-block cursor-not-allowed rounded bg-gray-400 px-5 py-2 text-white">
                            Registration Closed
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
