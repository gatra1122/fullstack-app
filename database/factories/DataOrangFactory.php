<?php

namespace Database\Factories;

use App\Models\DataOrang;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataOrang>
 */
class DataOrangFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = DataOrang::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $l = 'Laki-Laki';
        $p = 'Perempuan';
        return [
            'name' => fake()->name(),
            'age' => fake()->numberBetween(1,60),
            'gender' => fake()->randomElement([$l,$p]),
            'job' => fake()->jobTitle(),
            'address' => fake()->address(),
        ];
    }
}
