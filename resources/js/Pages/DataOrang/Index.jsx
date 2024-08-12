import React from 'react';
import Layout from '../../Layouts/Default';
// import { Head,Link } from '@inertiajs/inertia-react';
import { Head,Link } from '@inertiajs/react';
import Table from './Table';
import { Button } from '@material-tailwind/react';

function DataOrang() {
    return (
        <>
            <Head title="Data Orang"/>
            <Layout>
                <div className='float-right mb-2'>
                    <Link href={route('dataorang.form')}><Button className='bg-light-blue-600'>Tambah</Button></Link>
                </div>
                <Table />
            </Layout>
        </>
    );
}

export default DataOrang