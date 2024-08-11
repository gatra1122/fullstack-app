<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
            'created_at' => Carbon::parse($this->created_at)->format('d/m/Y'),
        ];
    }
}
