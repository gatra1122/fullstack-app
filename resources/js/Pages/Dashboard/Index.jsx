import React from 'react';
import Layout from '../../Layouts/Default';
import { Head, usePage } from '@inertiajs/inertia-react';

function Dashboard() {

    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Dashboard"/>
            <Layout>
                <div judulPage="Dashboard">
                    Selamat Datang <strong>{auth.user.name}</strong>
                    <br />
                    Ini bagian konten
                </div>
            </Layout>
        </>
    );

}

export default Dashboard