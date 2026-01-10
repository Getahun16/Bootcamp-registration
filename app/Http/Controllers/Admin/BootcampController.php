<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bootcamp;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BootcampController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Bootcamps/Index', [
            'bootcamps' => Bootcamp::orderBy('start_date', 'desc')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Bootcamps/Form', [
            'bootcamp' => null,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);

        Bootcamp::create($validated);

        return redirect()->route('admin.bootcamps.index')
            ->with('success', 'Bootcamp created successfully');
    }

    public function edit(Bootcamp $bootcamp): Response
    {
        return Inertia::render('Admin/Bootcamps/Form', [
            'bootcamp' => $bootcamp,
        ]);
    }

    public function update(Request $request, Bootcamp $bootcamp): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'location' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
        ]);

        $bootcamp->update($validated);

        return redirect()->route('admin.bootcamps.index')
            ->with('success', 'Bootcamp updated successfully');
    }

    public function destroy(Bootcamp $bootcamp): RedirectResponse
    {
        $bootcamp->delete();

        return back()->with('success', 'Bootcamp deleted successfully');
    }
}
