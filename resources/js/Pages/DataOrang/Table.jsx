import React, {Component, useState} from 'react'
import $ from 'jquery';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import './../../../css/dataTables.tailwindcss.css'

// import 'datatables.net-dt/css/jquery.dataTables.css'
// import 'datatables.net-bs/css/dataTables.bootstrap.css'

//var $ = require( 'jquery' );
// $.DTB = require( 'jquery' );
//$.DataTable = require('datatables.net')

export class Table extends Component {
    componentDidMount() {
        //console.log(this.el);

        // axios.get('/report.html').then(res => {
        //     const data = res.data;
        //     console.log(data)
        //     this.setState({data});
        // });

        // axios.get(route('dataorang.show'))
        // .then(res => {
        //     setDataset(res);
        // })

        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "ID" },
                { title: "NAME" },
                { title: "AGE" },
                { title: "JOB" },
                { title: "GENDER" },
                { title: "ADDRESS" },
                { title: "CREATED" },
            ]
        })
    }

    componentWillUnmount() {
        this.$el.DataTable().destroy(true);
    }

    render() {
        return (
            <div>
                <table className="display"  ref = {el => this.el = el }>

                </table>
            </div>
        );
    }
}