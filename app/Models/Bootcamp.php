<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bootcamp extends Model
{
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'price',
        'status',
    ];
}
