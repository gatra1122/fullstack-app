import React from 'react';
import Layout from '../../Layouts/Default';
// import { Head,Link } from '@inertiajs/inertia-react';
import { Head,Link, usePage } from '@inertiajs/react';
import Table from './Table';
import { Breadcrumbs } from '@material-tailwind/react';

function DataOrang() {
    const test = usePage().props.currentpage;

    return (
        <>
            <Head title="Data Orang" />
            <Layout>
                <div className='flex flex-col'>
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