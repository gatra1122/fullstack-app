<?php

namespace App\Http\Controllers;

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
        // return Inertia('DataOrang/Index', [
        //     'dataorang' => DataOrang::all()
        // ]);
        return DataOrangResource::collection(DataOrang::query()->orderBy('id', 'desc')->get());
        //return DataOrang::all();
    }

    // public function show(Event $event){
    //     // DataOrang::all();
    //     return Inertia('Event/Show', [
    //         'event' => $event->only(
    //           'id',
    //           'name',
    //           'age',
    //           'job',
    //           'gender',
    //           'address',
    //           'created_at'
    //         ),
    //     ]);
    // }
}
