import { Link, router } from '@inertiajs/react';

export default function Logout() {
    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/logout');
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="w-full max-w-md space-y-6">
                <h1 className="text-2xl font-semibold">Sign out</h1>
                <p className="text-gray-600">
                    Are you sure you want to log out?
                </p>

                <form onSubmit={handleLogout} className="space-y-4">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Logout
                    </button>
                    <Link
                        href="/"
                        className="ml-3 inline-flex items-center rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    );
}
