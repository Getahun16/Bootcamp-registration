<?php

namespace Database\Seeders;

use App\Models\Bootcamp;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BootcampSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Bootcamp::create([
            'title' => 'Full Stack Web Development Bootcamp',
            'description' => 'Learn Laravel & React from scratch',
            'start_date' => '2026-02-01',
            'end_date' => '2026-05-01',
            'price' => 0,
        ]);
    }
}
