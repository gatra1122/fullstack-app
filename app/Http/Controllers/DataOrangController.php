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
        return DataOrangResource::collection(DataOrang::query()->orderBy('id', 'desc')->get());
    }

    public function form(){
        return Inertia('DataOrang/Form', [
            'currentpage' => 'Data Orang / Form'
        ]);
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
