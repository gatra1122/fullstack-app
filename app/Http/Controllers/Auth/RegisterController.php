<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Http\Request;
use App\Models\User;

class RegisterController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return inertia('Auth/Register');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        /**
         * validate request
         */
        $data = $request->validate([
                'name' => ['required', 'string', 'alpha:ascii'],
                'email' => ['required', 'email', 'unique:users,email'],
                'password' => [
                    'required',
                    'confirmed',
                    Password::min(8)
                    // ->letters()
                    // ->symbols()
                    // ->numbers()
                ]
        ],
        [
            'name.required' => 'Nama wajib diisi.',
            'name.alpha' => 'Masukkan nama yang valid.',
            'email.required' => 'Email wajib diisi.',
            'email.unique' => 'Email sudah terdaftar.',
            'password.required' => 'Masukkan password yang valid.',
            'password.confirmed' => 'Password yang anda masukkan tidak sama.',
            'password.min' => 'Password minimal 8 karakter.',
        ]);
        /**
         * create user
         */
        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return redirect('/login')->with('status', 'Register Berhasil!');
    }
}
