import React, {useEffect, useState} from 'react'
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
    Breadcrumbs
} from "@material-tailwind/react";

export default function Edit() {
    const [isLoading, setIsLoading] = useState();

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        age: '',
        job: '',
        gender: '',
        address: '',
      })

    const { id_data } = usePage().props;

    useEffect(() => {
        setIsLoading(true);
        axios.get(route("dataorang.find", id_data)).then((res) => {
            setIsLoading(false);
            setData(
                {
                    id: res.data.id,
                    name:   res.data.name,
                    age: res.data.age,
                    job: res.data.job,
                    gender: res.data.gender,
                    address: res.data.address,
                }
            )
        }).catch(() => {
            setIsLoading(false);
        });
      }, [])

      const storeForm  = async(e) => {
        e.preventDefault();
          post(route('dataorang.update'), {
            _method: "put",
            data,
        });
    } 
    
    return (
        <>
            <Head title="Data Orang" />
            <Layout>
            <div className="flex">
                    <div className="ml-auto mb-10 float-right">
                        <Breadcrumbs>
                            <a href={route("dashboard")} className="opacity-60">
                                Dashboard
                            </a>
                            <a
                                href={route("dataorang.index")}
                                className="opacity-60"
                            >
                                Data Orang
                            </a>
                            <a href="#">Edit</a>
                        </Breadcrumbs>
                    </div>
                </div>
                <Card className="max-w-[900px] mx-auto animate-fade animate-once animate-duration-300">
                    <div className=" p-6 w-full">
                        <Typography
                            className="bg-light-blue-200 p-4 rounded-md text-center text-blue-gray-800"
                            variant="h4"
                        >
                            Form Edit Orang
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

                        {isLoading ? (
                            <Typography
                                as="div"
                                variant="paragraph"
                                className="h-11 w-full rounded-md bg-light-blue-50 animate-pulse"
                            ></Typography>
                        ) : (
                            <div className="">
                                <Input
                                    name="name"
                                    type="text"
                                    label="Nama Lengkap"
                                    placeholder="Masukkan nama lengkap"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    error={errors.name ? true : false}
                                    variant="standard"
                                    required
                                />
                            </div>
                        )}
                        {isLoading ? (
                            <Typography
                                as="div"
                                variant="paragraph"
                                className="h-11 w-full rounded-md bg-light-blue-50 mt-6 animate-pulse"
                            ></Typography>
                        ) : (
                            <div className="mt-6">
                                <Input
                                    name="age"
                                    type="number"
                                    maxLength={3}
                                    value={data.age}
                                    onChange={(e) =>
                                        setData("age", e.target.value)
                                    }
                                    label="Umur"
                                    placeholder="Masukkan umur"
                                    error={errors.age ? true : false}
                                    variant="standard"
                                    required
                                />
                            </div>
                        )}

                        {isLoading ? (
                            <Typography
                                as="div"
                                variant="paragraph"
                                className="h-11 w-full rounded-md bg-light-blue-50 mt-6 animate-pulse"
                            ></Typography>
                        ) : (
                            <div className="mt-6">
                                <Input
                                    name="job"
                                    type="text"
                                    label="Pekerjaan"
                                    placeholder="Masukkan pekerjaan"
                                    value={data.job}
                                    onChange={(e) =>
                                        setData("job", e.target.value)
                                    }
                                    error={errors.job ? true : false}
                                    variant="standard"
                                    required
                                />
                            </div>
                        )}

                        {isLoading ? (
                            <Typography
                                as="div"
                                variant="paragraph"
                                className="h-11 w-full rounded-md bg-light-blue-50 mt-6 animate-pulse"
                            ></Typography>
                        ) : (
                            <div className="mt-6">
                                <Select
                                    label="Jenis Kelamin"
                                    value={data.gender}
                                    onChange={(e) => setData("gender", e)}
                                    variant="standard"
                                    required
                                >
                                    <Option value="Laki-Laki">Laki-Laki</Option>
                                    <Option value="Perempuan">Perempuan</Option>
                                </Select>
                            </div>
                        )}

                        {isLoading ? (
                            <Typography
                                as="div"
                                variant="paragraph"
                                className="h-11 w-full rounded-md bg-light-blue-50 mt-6 animate-pulse"
                            ></Typography>
                        ) : (
                            <div className="mt-6">
                                <Input
                                    name="address"
                                    type="text"
                                    label="Alamat"
                                    placeholder="Masukkan alamat"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    error={errors.address ? true : false}
                                    variant="standard"
                                    required
                                />
                            </div>
                        )}

                        <div className="mt-12 block">
                            <Button
                                type="submit"
                                className="bg-light-blue-600 animate-duration-1000"
                                loading={processing}
                                fullWidth
                            >
                                Perbarui
                            </Button>
                        </div>
                    </form>
                </Card>
            </Layout>
        </>
    );
}