<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'regex:/^[\pL\s]+$/u'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    // ->letters()
                    // ->symbols()
                    // ->numbers()
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama wajib diisi !',
            'name.regex' => 'Masukkan nama yang valid !',
            'email.required' => 'Email wajib diisi !',
            'email.unique' => 'Email sudah terdaftar !',
            'password.required' => 'Masukkan password yang valid !',
            'password.confirmed' => 'Password yang anda masukkan tidak sama !',
        ];
    }
}
