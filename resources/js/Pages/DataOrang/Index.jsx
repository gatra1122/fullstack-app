import React, { useState, useEffect } from 'react';
import Layout from '../../Layouts/Default';
import { Head, usePage } from '@inertiajs/inertia-react';
// import { Table as Tbl } from './Table';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import Table from './Table';

function DataOrang() {
    return (
        <>
            <Head title="Data Orang">
            </Head>
            <Layout>
                <div judulPage="Data Orang">
                    <div>
                    <br />
                    Ini bagian konten data orang
                    <div>
                        <Table></Table>
                    </div>
                    </div>

                </div>
            </Layout>
        </>
    );
}

export default DataOrang