<?php

use App\Http\Controllers\Api\BootcampController;
use App\Http\Controllers\Api\RegistrationController;
use App\Http\Controllers\Admin\RegistrationController as AdminRegistrationController;
use App\Http\Controllers\Admin\BootcampController as AdminBootcampController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Bootcamp;


Route::get('/', function () {
    $bootcamps = Bootcamp::orderBy('start_date')->get();
    $userRegistrations = [];
    
    if (Auth::check()) {
        $userRegistrations = Auth::user()
            ->registrations()
            ->with('bootcamp')
            ->latest()
            ->get();
    }
    
    return Inertia::render('Home', [
        'bootcamps' => $bootcamps,
        'userRegistrations' => $userRegistrations,
    ]);
})->name('home');

Route::get('/bootcamps', function () {
    return Inertia::render('Bootcamps/Index');
})->name('bootcamps.index');

Route::get('/bootcamps/{id}/register', function ($id) {
    $user = Auth::user();
    return Inertia::render('Bootcamps/Register', [
        'bootcampId' => $id,
        'user' => $user,
    ]);
});

// Registration submission (Inertia form posts expect redirects)
Route::post('/registrations', [RegistrationController::class, 'store'])->name('registrations.store');

// API routes for client-side data fetching
Route::prefix('api')->group(function () {
    Route::get('/bootcamps', [BootcampController::class, 'index'])->name('api.bootcamps.index');
    Route::get('/bootcamps/{id}', [BootcampController::class, 'show'])->name('api.bootcamps.show');
});

Route::get('/bootcamps/{bootcamp}', function (Bootcamp $bootcamp) {
    return Inertia::render('Bootcamps/Show', [
        'bootcamp' => $bootcamp,
    ]);
});

// Dashboard (unified admin page for admin users, regular dashboard for others)
Route::middleware('auth')->get('/dashboard', function () {
    if (Auth::user()?->is_admin) {
        return Inertia::render('Admin/Dashboard');
    }
    
    // Get user's registrations with bootcamp details
    $registrations = Auth::user()->registrations()->with('bootcamp')->latest()->get();
    
    return Inertia::render('Dashboard', [
        'registrations' => $registrations,
    ]);
})->name('dashboard');

// Logout confirmation page (uses Fortify POST /logout)
Route::middleware('auth')->get('/logout', function () {
    return Inertia::render('auth/logout');
})->name('logout.page');



// Admin routes consolidated below

// Public /admin entry redirects to dashboard
Route::get('/admin', function () {
    return redirect('/dashboard');
})->name('admin.home');

// Admin routes (authenticated + admin-only)
Route::middleware(['auth', 'admin'])
    ->prefix('dashboard')
    ->group(function () {
        // Registrations
        Route::get('/registrations', [AdminRegistrationController::class, 'index'])
            ->name('admin.registrations.index');

        Route::post('/registrations/{registration}/approve', [AdminRegistrationController::class, 'approve'])
            ->name('admin.registrations.approve');

        Route::post('/registrations/{registration}/reject', [AdminRegistrationController::class, 'reject'])
            ->name('admin.registrations.reject');

        // Bootcamps
        Route::get('/bootcamps', [AdminBootcampController::class, 'index'])
            ->name('admin.bootcamps.index');

        Route::get('/bootcamps/create', [AdminBootcampController::class, 'create'])
            ->name('admin.bootcamps.create');

        Route::post('/bootcamps', [AdminBootcampController::class, 'store'])
            ->name('admin.bootcamps.store');

        Route::get('/bootcamps/{bootcamp}/edit', [AdminBootcampController::class, 'edit'])
            ->name('admin.bootcamps.edit');

        Route::patch('/bootcamps/{bootcamp}', [AdminBootcampController::class, 'update'])
            ->name('admin.bootcamps.update');

        Route::delete('/bootcamps/{bootcamp}', [AdminBootcampController::class, 'destroy'])
            ->name('admin.bootcamps.destroy');
    });
