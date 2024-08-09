<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Welcome');
});


Route::group(['middleware' => ['auth']], function () {
//Dashboard
Route::get('/dashboard', DashboardController::class)->middleware('auth');
//Logout
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');
});

Route::group(['middleware' => ['guest']], function () {
//Login
Route::get('/', [LoginController::class, 'index'])->name('login.index');
Route::post('/', [LoginController::class, 'store']);
//Register
Route::get('/register', [RegisterController::class, 'index']);
Route::post('/register', [RegisterController::class, 'store']);
});
