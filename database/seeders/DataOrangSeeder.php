<?php

namespace Database\Seeders;

use App\Models\DataOrang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DataOrangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DataOrang::factory(100)->create();
    }
}
