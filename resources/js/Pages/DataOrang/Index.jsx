import React, { useState, useEffect } from 'react';
import Layout from '../../Layouts/Default';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Table as Tbl } from './Table';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

function DataOrang() {

    // var data_Set = [
    //     ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    //     ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    //     ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    //     ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    //     ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    // ];

    const [dataset, setDataset] = useState([]);
    useEffect(() => {
        axios.get(route("dataorang.show")).then((res) => {
            setDataset(res.data);
            // console.log(dataset.data);
        });
    }, []);
    console.log(dataset.data);
    return (
        <>
            <Head title="Data Orang">
            </Head>
            <Layout>
                <div title="Data Orang">
                    {/* Selamat Datang <strong>{auth.user.name}</strong> */}
                    <br />
                    Ini bagian konten data orang
                    <div>
                        <Tbl data={dataset.data}></Tbl>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default DataOrang