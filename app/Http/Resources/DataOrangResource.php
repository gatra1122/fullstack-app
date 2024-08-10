<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DataOrangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
           'id' => $this->id,
            'name' => $this->name,
            'age' => $this->age,
            'job' => $this->job,
            'gender' => $this->gender,
            'address' => $this->address,
            'created_at' => $this->created_at,
        ];
    }
}
