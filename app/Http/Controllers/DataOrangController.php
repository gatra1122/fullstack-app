<?php

namespace App\Http\Controllers;

use App\Http\Requests\DataOrang\StoreDataOrangRequest;
use App\Http\Resources\DataOrangResource;
use App\Models\DataOrang;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Http\Request;

class DataOrangController extends Controller
{
    public function index()
    {
        return Inertia('DataOrang/Index', [
            'currentpage' => 'Data Orang'
        ]);
    }

    public function show(){
        return DataOrangResource::collection(DataOrang::query()->orderBy('id', 'desc')->get());
    }

    public function form(){
        return Inertia('DataOrang/Form', [
            'currentpage' => 'Data Orang / Form'
        ]);
    }

    public function store(StoreDataOrangRequest $request)
    {
        $data = $request->validated();

        DataOrang::create([
            'name' => $data['name'],
            'age' => $data['age'],
            'job' => $data['job'],
            'gender' => $data['gender'],
            'address' => $data['address'],
        ]);

        return redirect()->route('dataorang.index')->with('status', 'Register Berhasil!');
    }
}
