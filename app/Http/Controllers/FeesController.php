<?php

namespace App\Http\Controllers;

use App\Fees;
use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FeesController extends Controller
{
    public function add(Request $request) {
        Validator::make($request->all(), [
            'studentID' => 'required|exists:students,id',
            'amount' => 'required'
        ], [
            'studentID.exists' => 'Student ID Number provided does not exist in records.'
        ])->validate();

        $student = Student::find($request->input('studentID'));

        $fees = new Fees();
        $fees->amount = $request->input('amount');

        $student->fees()->save($fees);

        return $fees;
    }

    public function getFees(Request $request, $studentID = null) {
        if($studentID) {
            $student = Student::find($studentID);
            if($student){
                return [
                    'student' => $student,
                    'feeTransactions' => $student->fees()->get()
                ];
            }  else {
                return response([
                    'errors' => [
                        'studentID' => 'Student ID Number provided does not exist in records.'
                    ]
                ], 422);
            }
        }

        return Fees::all();
    }
}
