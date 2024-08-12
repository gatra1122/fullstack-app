<?php

namespace App\Http\Requests\DataOrang;

use Illuminate\Foundation\Http\FormRequest;

class StoreDataOrangRequest extends FormRequest
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
            'name' => ['required', 'regex:/^[\pL\s\-]+$/u'],
            'age' => ['required', 'integer', 'digits_between:1,3'],
            'job' => ['required'],
            'gender' => ['required'],
            'address' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama wajib diisi !',
            'name.regex' => 'Masukkan nama yang valid !',
            'age.required' => 'Umur wajib diisi !',
            'age.integer' => 'Masukkan umur yang valid !',
            'age.digits_between' => 'Umur tidak bisa melebihi 3 digit !',
            'gender.required' => 'Jenis kelamin wajib diisi !',
            'address.confirmed' => 'Alamat wajib diisi !',
        ];
    }
}
