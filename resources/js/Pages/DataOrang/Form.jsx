import React, {useState} from 'react'
import axios from 'axios';
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
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [genderselect, setGenderselect] = useState("Laki-Laki");

    const storeForm  = async(e) => {
        e.preventDefault();

        // Inertia.post(route('login.store'), {
        //     //data
        //     email: email,
        //     password: password,
        // });
    } 
    return (
        <>
            <Head title="Data Orang" />
            <Layout>
                <Card>
                    <Typography className="p-4" variant="h4">
                        Tambah
                    </Typography>
                    <form className="w-full p-6 mx-auto" onSubmit={storeForm}>
                        {Object.keys(errors).length > 0 && (
                            <div className="bg-red-400 py-4 px-6 border-1 border-red-900 rounded-lg text-blue-gray-50">
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

                        <div className="mt-8">
                            <Input
                                type="text"
                                label="Nama Lengkap"
                                placeholder="Masukkan nama lengkap"
                                onChange={(e) => setName(e.target.value)}
                                error={errors.name ? 1 : 0}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                                type="text"
                                inputmode="numeric"
                                maxlength="19"
                                onChange={(e) => setAge(e.target.value)}
                                label="Umur"
                                placeholder="Masukkan umur"
                                error={errors.age ? 1 : 0}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                                type="text"
                                label="Pekerjaan"
                                placeholder="Masukkan pekerjaan"
                                onChange={(e) => setJob(e.target.value)}
                                error={errors.job ? 1 : 0}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Select label="Jenis Kelamin"
                            value={genderselect}
                            onChange={(val) => setGenderselect(val)}>
                                <Option value="Laki-Laki">Laki-Laki</Option>
                                <Option value="Perempuan">Perempuan</Option>
                            </Select>
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