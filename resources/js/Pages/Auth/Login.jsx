import React, { useState } from 'react';
import { Head, usePage, Link, router, useForm } from '@inertiajs/react';
import { Button, Input,Typography } from '@material-tailwind/react';
import { toast } from 'react-toastify';

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
      })

    const storeLogin  = async(e) => {
        e.preventDefault();
          post(route('login.store'), {
            _method: "post",
            data,
            onSuccess: () => {
                toast.success('Berhasil !');
            },
            onError: () => {
                toast.error('Gagal !');
            },
        });
    } 

    return (
        <>
            <Head>
                <title>Masuk</title>
            </Head>

            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
                    <div className="pointer-events-none max-md:order-1 h-screen">
                        <img
                            src="/assets/img/image-3.webp"
                            className="w-full h-full object-cover"
                            alt="login-image"
                        />
                    </div>

                    <form
                        className="animate-fade-down animate-once animate-duration-200 max-w-xl w-full p-6 mx-auto"
                        onSubmit={storeLogin}
                    >
                        <div className="mb-12">
                            <h3 className="cursor-default text-gray-800 text-4xl font-extrabold">
                                Masuk
                            </h3>
                            <p className="text-gray-800 text-sm mt-6">
                                Belum punya akun ?
                                <Link
                                    href="/register"
                                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                >
                                    Daftar disini
                                </Link>
                            </p>
                        </div>

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
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Masukkan alamat email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                error={errors.email ? 1 : 0}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                label="Password"
                                placeholder="Masukkan password"
                                error={errors.password ? 1 : 0}
                                required
                            />
                        </div>

                        <div className="mt-12 block">
                            <Button
                                type="submit"
                                loading={processing}
                                className="bg-light-blue-600 animate-duration-1000"
                                fullWidth
                            >
                                Masuk
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Login