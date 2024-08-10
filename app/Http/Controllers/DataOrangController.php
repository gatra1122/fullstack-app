<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataOrangController extends Controller
{
    public function index()
    {
        return inertia('DataOrang/Index');
    }
}
