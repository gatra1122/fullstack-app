import React from 'react';
import Layout from '../../Layouts/Default';
import { Head } from '@inertiajs/inertia-react';
import Table from './Table';

function DataOrang() {
    return (
        <>
            <Head title="Data Orang"/>
            <Layout>
                <Table />
            </Layout>
        </>
    );
}

export default DataOrang