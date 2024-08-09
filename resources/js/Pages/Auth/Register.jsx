import React, { useState } from 'react';
//import Layout from '../../Layouts/Default';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

// UI
import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Register() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    //method "storeRegister"
    const storeRegister = async(e) => {
        e.preventDefault();
        
        Inertia.post('/register', {
            //data
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        });
    } 

    return (
        <>
            <Head>
                <title>Register Akun | Nama Aplikasi</title>
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
                            <Alert severity="error">
                                <AlertTitle>Gagal</AlertTitle>
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>*{errors[key]}</p>
                                ))}
                            </Alert>
                        )}

                        <div className="mt-8">
                            <TextField
                                fullWidth
                                name="name"
                                type="text"
                                variant="standard"
                                label="Nama"
                                placeholder="Masukkan nama anda"
                                error={ errors.name ? 1 : 0 }
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <TextField
                                fullWidth
                                name="email"
                                type="email"
                                variant="standard"
                                label="Email"
                                placeholder="Masukkan alamat email"
                                error={ errors.email? 1 : 0 }
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <TextField
                                fullWidth
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                variant="standard"
                                label="Password"
                                placeholder="Masukkan password"
                                error={ errors.password ? 1 : 0 }
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <TextField
                                fullWidth
                                name="password_confirmation"
                                type="password"
                                variant="standard"
                                label="Konfirmasi Password"
                                placeholder="Konfirmasi password"
                                error={ errors.password ? 1 : 0 }
                                required
                                onChange={(e) => setPasswordConfirmation(e.target.value) }
                            />
                        </div>

                        <div className="mt-12 block">
                            <Button type="submit" variant="contained" fullWidth>
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