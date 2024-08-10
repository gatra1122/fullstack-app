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
            '0' => $this->id,
            '1' => $this->name,
            '2' => $this->age,
            '3' => $this->job,
            '4' => $this->gender,
            '5' => $this->address,
            '6' => $this->created_at,
        ];
    }
}
