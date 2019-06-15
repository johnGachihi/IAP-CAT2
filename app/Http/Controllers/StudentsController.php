<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class StudentsController extends Controller
{
    public function add(Request $request) {

        Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'dateOfBirth' => 'required',
            'address' => 'required'
        ])->validate();

        $student = new Student();
        $student->firstname = $request->input('firstname');
        $student->lastname = $request->input('lastname');
        $dateOfBirth = date('Y-m-d H:i:s', ($request->input('dateOfBirth'))/1000);
        Log::error($dateOfBirth);
        $student->date_of_birth = $dateOfBirth;
        $student->address = $request->input('address');
        $student->save();

        return $student;
    }
}
