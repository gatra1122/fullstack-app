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
Route::get('/data-orang/add', [DataOrangController::class, 'add'])->name('dataorang.add');
Route::post('/data-orang/add/store', [DataOrangController::class, 'store'])->name('dataorang.store');
Route::get('/data-orang/edit/{id}', [DataOrangController::class, 'edit'])->name('dataorang.edit');
Route::get('/data-orang/find/{id}', [DataOrangController::class, 'find'])->name('dataorang.find');
Route::post('/data-orang/edit/update', [DataOrangController::class, 'update'])->name('dataorang.update');
Route::delete('/data-orang/hapus/{id}', [DataOrangController::class, 'hapus'])->name('dataorang.hapus');

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
