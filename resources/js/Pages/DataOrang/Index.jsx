import React from 'react';
import Layout from '../../Layouts/Default';
import { Head, usePage } from '@inertiajs/inertia-react';

function DataOrang() {

    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Data Orang">
            </Head>
            <Layout>
                <div>
                    Selamat Datang <strong>{auth.user.name}</strong>
                    <br />
                    Ini bagian konten data orang
                    
                </div>
            </Layout>
        </>
    );

}

export default DataOrang