import React from 'react';
import Layout from '../../Layouts/Default';
import { Head,Link, usePage } from '@inertiajs/react';
import Table from './Table';
import { Breadcrumbs } from '@material-tailwind/react';
import { toast } from 'react-toastify';

function DataOrang() {
    const notify = () => toast("Wow so easy !");

    return (
        <>
            <Head title="Data Orang" />
            <Layout>
                <div className='flex flex-col'>
                <button onClick={notify}>Notify !</button>
                    <div className="ml-auto mb-10">
                        <Breadcrumbs>
                            <a href={route('dashboard')} className="opacity-60">
                                Dashboard
                            </a>
                            <a href="#">
                                Data Orang
                            </a>
                        </Breadcrumbs>
                    </div>
                    <Table />
                </div>
            </Layout>
        </>
    );
}

export default DataOrang