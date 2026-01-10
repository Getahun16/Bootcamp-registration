<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
        'bootcamp_id',
        'user_id',
        'full_name',
        'email',
        'phone',
        'experience_level',
        'status',
    ];

    public function bootcamp()
    {
        return $this->belongsTo(Bootcamp::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
