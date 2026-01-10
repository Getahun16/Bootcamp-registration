<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Registration;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Registrations/Index', [
            'registrations' => Registration::with('bootcamp')
                ->latest()
                ->get(),
        ]);
    }

    public function approve(Registration $registration): RedirectResponse
    {
        $registration->update(['status' => 'approved']);

        return back()->with('success', 'Registration approved');
    }

    public function reject(Registration $registration): RedirectResponse
    {
        $registration->update(['status' => 'rejected']);

        return back()->with('success', 'Registration rejected');
    }
}
