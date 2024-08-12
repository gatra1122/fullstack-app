import React, {useState} from 'react'
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Layout from '../../Layouts/Default';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import {
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";

export default function Form() {
    //destruct props "errors"
    const { errors } = usePage(null).props;

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [gender, setGender] = useState('Laki-Laki');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const [ errors, setErrors]  =  useState([]);

    const storeForm  = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        // console.log([name,age,job,gender,address])
        // axios.post(route('dataorang.store'), {
        //     name: name,
        //     age: age,
        //     job: job,
        //     gender: gender,
        //     address: address,
        //   })
        //   .then(function (response) {
        //     setIsLoading(false);
        //   })
        //   .catch(function (error) {
        //     setIsLoading(false);
        //     setErrors(error.response.data.errors)
        //   });

          Inertia.post(route('dataorang.store'), {
            //data
            name: name,
            age: age,
            job: job,
            gender: gender,
            address: address,
            onFinish: visit => {
                console.log('vasfasd'+visit)
              },
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
                                onChange={(e) => setName(e.target.value)}
                                error={errors.name ? true : false}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                            name='age'
                                type="number"
                                maxLength={3}
                                onChange={(e) => setAge(e.target.value)}
                                label="Umur"
                                placeholder="Masukkan umur"
                                error={errors.age ? true : false}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                            name='job'
                                type="text"
                                label="Pekerjaan"
                                placeholder="Masukkan pekerjaan"
                                onChange={(e) => setJob(e.target.value)}
                                error={errors.job ? true : false}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Select name='gender' label="Jenis Kelamin"
                            value={gender}
                            onChange={(val) => setGenderselect(val)}
                            error={errors.gender ? true : false} 
                            >
                                <Option value="Laki-Laki">Laki-Laki</Option>
                                <Option value="Perempuan">Perempuan</Option>
                            </Select>
                        </div>
                        <div className="mt-8">
                            <Input
                            name='address'
                                type="text"
                                label="Alamat"
                                placeholder="Masukkan alamat"
                                onChange={(e) => setAddress(e.target.value)}
                                error={errors.address ? true : false}
                                required
                            />
                        </div>

                        <div className="mt-12 block">
                            <Button
                                type="submit"
                                className="bg-light-blue-600"
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