<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'welcome')->name('homepage');
Route::view('/student-registration', '101892.registration')->name("student-registration");
Route::view('/fee-payment', '101892.fee-payment')->name("fee-payment");

Route::post('/student', 'StudentsController@add');
