import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import './../../../css/dataTables.css'

export class Table extends Component {
    componentDidMount() {
        axios.get(route("dataorang.show"))
        .then((res) => {
            let toolbar = document.createElement('div');
            toolbar.innerHTML = '<a class="bg-gray-600 py-2 px-4 text-gray-300" href="#">Tambah</a>';

            this.$el = $(this.el)
            this.$el.DataTable({
                // data: res.data.data,
                // columns: [
                //     { title: "ID" },
                //     { title: "NAME" },
                //     { title: "AGE" },
                //     { title: "JOB" },
                //     { title: "GENDER" },
                //     { title: "ADDRESS" },
                //     { title: "CREATED" },
                // ],
                layout: {
                    topStart: 'search',
                    topEnd: [toolbar],
                    bottomStart: ['info','pageLength'],
                    bottomEnd: 'paging'
                    },
            })
        });
    }

    componentWillUnmount() {
        this.$el.DataTable().destroy(true);
    }

    render() {
        
        return (
            <div>
                <table className="table display" ref={(el) => (this.el = el)}>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>JOB</th>
                            <th>GENDER</th>
                            {/* <th>ADDRESS</th>
                            <th>CREATED</th>
                            <th>ID</th>
                            <th>Aksi</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {animals.map(animal => (
                            <td>{animal}</td>
                        ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}