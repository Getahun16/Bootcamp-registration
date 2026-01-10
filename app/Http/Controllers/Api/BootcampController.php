<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bootcamp;
use Illuminate\Http\Request;

class BootcampController extends Controller
{
    public function index()
    {
        return Bootcamp::where('status', 'open')->get();
    }

    public function show($id)
    {
        return Bootcamp::findOrFail($id);
    }
}
