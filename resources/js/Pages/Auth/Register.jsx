import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Input,Typography } from '@material-tailwind/react';
import { toast } from 'react-toastify';

function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })

    const storeRegister  = async(e) => {
        e.preventDefault();
          post(route('register.store'), {
            _method: "post",
            data,
            onSuccess: () => {
                toast.success('Berhasil ! Silahkan masuk');
            },
            onError: () => {
                toast.error('Gagal !');
            },
        });
    } 

    return (
        <>
            <Head>
                <title>Register Akun</title>
            </Head>

            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
                    <div className="pointer-events-none max-md:order-1 h-screen min-h-full">
                        <img
                            src="/assets/img/image-3.webp"
                            className="w-full h-full object-cover"
                            alt="login-image"
                        />
                    </div>

                    <form
                        className="animate-fade-down animate-once animate-duration-200 max-w-xl w-full p-6 mx-auto"
                        onSubmit={storeRegister}
                    >
                        <div className="mb-12">
                            <h3 className="cursor-default text-gray-800 text-4xl font-extrabold">
                                Daftar
                            </h3>
                            <p className="text-gray-800 text-sm mt-6">
                                Sudah punya akun ?
                                <Link
                                    href="/login"
                                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                >
                                    Masuk disini
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
                                type="text"
                                label="Nama"
                                placeholder="Masukkan nama anda"
                                error={errors.name ? 1 : 0}
                                required
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="Masukkan alamat email"
                                error={errors.email ? 1 : 0}
                                required
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <Input
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
                        <div className="mt-8">
                            <Input
                                type="password"
                                label="Konfirmasi Password"
                                placeholder="Konfirmasi password"
                                error={errors.password ? 1 : 0}
                                required
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData("password_confirmation", e.target.value)
                                }
                            />
                        </div>

                        <div className="mt-12 block">
                            <Button type="submit" loading={processing} className="bg-light-blue-600 animate-duration-1000" fullWidth>
                                Daftar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Register