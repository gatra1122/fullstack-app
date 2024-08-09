<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return inertia('Auth/Login');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(LoginRequest $request)
    {
        /**
         * validate request
         */
        // $this->validate($request, [
        //     'email'     => 'required|email',
        //     'password'  => 'required'
        // ]);
        $request->validated();

        //get email and password from request
        $credentials = $request->only('email', 'password');

        //attempt to login
        if (Auth::attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();

            //redirect route dashboard
            return redirect('/dashboard');
        }

        //if login fails
        return back()->withErrors([
            'password' => 'Password yang anda masukkan salah.',
        ]);
    }


    /**
     * destroy
     *
     * @return void
     */
    public function destroy()
    {
        auth()->logout();

        return redirect('/login');
    }
}
