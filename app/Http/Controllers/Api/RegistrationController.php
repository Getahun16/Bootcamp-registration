<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Registration;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'bootcamp_id' => 'required|exists:bootcamps,id',
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'experience_level' => 'required|in:beginner,intermediate,advanced',
        ]);

        // Add user_id if user is authenticated
        if ($request->user()) {
            $validated['user_id'] = $request->user()->id;
        }

        $registration = Registration::create($validated);

        return redirect()
            ->route('home')
            ->with('success', 'Registration successful! Check your registrations below.');
    }
}
