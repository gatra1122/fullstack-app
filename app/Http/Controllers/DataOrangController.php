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

    public function find($id){
        return DataOrang::where('id',$id)->first();
    }

    public function add(){
        return Inertia('DataOrang/Add', [
            'currentpage' => 'Data Orang / Add'
        ]);
    }

    public function edit($id){
        return Inertia('DataOrang/Edit', [
            'currentpage' => 'Data Orang / Edit',
            'id_data' => $id,
        ]);
    }

    public function store(StoreDataOrangRequest $request)
    {
        $data = $request->validated();

        $datastore = DataOrang::create([
            'name' => $data['name'],
            'age' => $data['age'],
            'job' => $data['job'],
            'gender' => $data['gender'],
            'address' => $data['address'],
        ]);

        if(!$datastore){
            return back()->withErrors([
                'status' => 'Gagal!',
            ]);
        }

        return redirect()->route('dataorang.index')->with('status', 'Berhasil!');
    }

    public function update(StoreDataOrangRequest $request)
    {
        $data = $request->validated();
        $dataupdate = DataOrang::findOrFail($request->id);
        $dataupdate->update([
            'name' => $data['name'],
            'age' => $data['age'],
            'job' => $data['job'],
            'gender' => $data['gender'],
            'address' => $data['address'],
        ]);

        if(!$dataupdate){
            return back()->withErrors([
                'status' => 'Gagal!',
            ]);
        }

        return redirect()->route('dataorang.index')->with('status', 'Berhasil!');
    }

    public function hapus($id)
    {
        $hapus = DataOrang::find($id)->delete();

        if(!$hapus){
            return back()->withErrors([
                'status' => 'Gagal!',
            ]);
        }
        return redirect()->route('dataorang.index')->with('status', 'Berhasil!');
    }
}
