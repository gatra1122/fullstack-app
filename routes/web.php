<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataOrangController;

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

// Route::get('/', function () {
//     return inertia('Welcome');
// });


Route::group(['middleware' => ['auth']], function () {
//Dashboard
Route::get('/dashboard', DashboardController::class)->name('dashboard');
//Data Orang
Route::get('/data-orang', [DataOrangController::class, 'index'])->name('dataorang.index');
Route::get('/data-orang/show', [DataOrangController::class, 'show'])->name('dataorang.show');
Route::get('/data-orang/form', [DataOrangController::class, 'form'])->name('dataorang.form');

//Logout
Route::get('/logout', [LoginController::class, 'destroy'])->name('logout');
});

Route::group(['middleware' => ['guest']], function () {
//Login
Route::get('/', [LoginController::class, 'index']);
Route::get('/login', [LoginController::class, 'index'])->name('login.index');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');
//Register
Route::get('/register', [RegisterController::class, 'index'])->name('register.index');
Route::post('/register', [RegisterController::class, 'store'])->name('register.store');
});
