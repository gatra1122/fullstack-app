import React, {useState} from 'react'
import axios from 'axios';
// import { Inertia } from '@inertiajs/inertia';
import Layout from '../../Layouts/Default';
import { Head, usePage, useForm } from '@inertiajs/react';
import {
    Input,
    Button,
    Card,
    Typography,
    Select,
    Option,
    Spinner
} from "@material-tailwind/react";

export default function Form() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        age: '',
        job: '',
        gender: '',
        address: '',
      })

    const storeForm  = async(e) => {
        e.preventDefault();
          post(route('dataorang.store'), {
            data,
        });
    } 

    
    return (
        <>
            <Head title="Data Orang" />
            <Layout>
                <Card className='max-w-[900px] mx-auto'>
                    <div className=' p-6 w-full'>
                    <Typography className="bg-light-blue-200 p-4 rounded-md text-center text-blue-gray-800" variant="h4">
                        Form Data Orang
                    </Typography>
                    </div>
                    <form className="w-full p-6 mx-auto" onSubmit={storeForm}>
                        
                        {Object.keys(errors).length > 0 && (
                            <div className="bg-red-400 py-4 px-6 border-1 border-red-900 rounded-lg text-blue-gray-50 mb-8">
                                <Typography className="font-medium">
                                    Gagal !
                                </Typography>
                                <ul>
                                    {Object.keys(errors).map((key) => (
                                        <li key={key}>*{errors[key]}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="">
                            <Input
                                name='name'
                                type="text"
                                label="Nama Lengkap"
                                placeholder="Masukkan nama lengkap"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                error={errors.name ? true : false}
                                variant="standard"
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                            name='age'
                                type="number"
                                maxLength={3}
                                value={data.age}
                                onChange={e => setData('age', e.target.value)}
                                label="Umur"
                                placeholder="Masukkan umur"
                                error={errors.age ? true : false}
                                variant="standard"
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                            name='job'
                                type="text"
                                label="Pekerjaan"
                                placeholder="Masukkan pekerjaan"
                                value={data.job}
                                onChange={e => setData('job', e.target.value)}
                                error={errors.job ? true : false}
                                variant="standard"
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Select label='Jenis Kelamin' 
                            onChange={e => setData('gender', e)}
                            variant="standard"
                            required>
                                <Option value='Laki-Laki'>Laki-Laki</Option>
                                <Option value='Perempuan'>Perempuan</Option>
                            </Select>
                        </div>
                        <div className="mt-8">
                            <Input
                            name='address'
                                type="text"
                                label="Alamat"
                                placeholder="Masukkan alamat"
                                value={data.address}
                                onChange={e => setData('address', e.target.value)}
                                error={errors.address ? true : false}
                                variant="standard"
                                required
                            />
                        </div>

                        <div className="mt-12 block">
                            <Button
                                type="submit"
                                className="bg-light-blue-600 "
                                loading={processing}
                                fullWidth
                            >
                                Tambah
                            </Button>
                        </div>
                    </form>
                </Card>
            </Layout>
        </>
    );
}