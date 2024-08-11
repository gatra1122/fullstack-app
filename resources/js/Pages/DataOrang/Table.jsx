import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel
} from "@tanstack/react-table";
import { Button, Spinner } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { Link } from '@inertiajs/inertia-react';

export default function Table() {
    const [isLoading, setIsLoading] = useState();
    const [getData, setData] = useState([]);
    const columnHelper = createColumnHelper();
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })
   
      const columns = [
          columnHelper.accessor("no", {
              header: () => "NO",
              cell: (info) => parseInt(info.row.id) + 1,
          }),
          columnHelper.accessor("name", {
              header: "Name",
          }),
          columnHelper.accessor("age", {
              header: "Age",
          }),
          columnHelper.accessor("job", {
              header: "Job",
          }),
          columnHelper.accessor("gender", {
              header: "Gender",
          }),
          columnHelper.accessor("address", {
              header: "Address",
          }),
          columnHelper.accessor("created_at", {
              header: "Created",
          }),
          columnHelper.accessor("id", {
              header: "Aksi",
              cell: (id) => <><Link href={route('dashboard')}><FontAwesomeIcon icon={faEdit} />{id.getValue()}</Link></>,
          }),
      ];

    const table = useReactTable({
        width: "auto",
        columns,
        data: getData,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
        state: {
          pagination,
        },
        // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
      })

      useEffect(() => {
        setIsLoading(true);
        axios.get(route("dataorang.show")).then((res) => {
            setIsLoading(false);
            setData(res.data.data);
        }).catch(() => {
            setIsLoading(false);
        });
      }, [])

    return (
        <>
                <div>
                    <table className="w-full table-auto text-left">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup, id) => {
                                return (
                                    <tr key={id}>
                                        {headerGroup.headers.map(
                                            (header, id) => {
                                                return (
                                                    <th
                                                        key={id}
                                                        id={header.id}
                                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                                    >
                                                        {" "}
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                  header.column
                                                                      .columnDef
                                                                      .header,
                                                                  header.getContext()
                                                              )}
                                                    </th>
                                                );
                                            }
                                        )}
                                    </tr>
                                );
                            })}
                        </thead>
                        {isLoading && (
                            <tbody>
                                <tr>
                                    <td colSpan={8} className="">
                                        <Spinner className="h-10 w-10 mx-auto mt-3" />
                                    </td>
                                </tr>
                            </tbody>
                        )}
                        <tbody>
                            {table.getRowModel().rows.map((row) => {
                                return (
                                    <tr
                                        key={row.id}
                                        className="even:bg-blue-gray-50/50"
                                    >
                                        {row.getVisibleCells().map((cell) => {
                                            return (
                                                <td
                                                    key={cell.id}
                                                    className="p-4"
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext()
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* tombol paginasi */}
                    <div className="flex items-center gap-2">
                        <button
                            className="border rounded p-1"
                            onClick={() => table.firstPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {"<<"}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {"<"}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {">"}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.lastPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {">>"}
                        </button>
                        <span className="flex items-center gap-1">
                            <div>Page</div>
                            <strong>
                                {table.getState().pagination.pageIndex + 1} of{" "}
                                {table.getPageCount().toLocaleString()}
                            </strong>
                        </span>
                        <span className="flex items-center gap-1">
                            | Go to page:
                            <input
                                type="number"
                                min="1"
                                max={table.getPageCount()}
                                defaultValue={
                                    table.getState().pagination.pageIndex + 1
                                }
                                onChange={(e) => {
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0;
                                    table.setPageIndex(page);
                                }}
                                className="border p-1 rounded w-16"
                            />
                        </span>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value));
                            }}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
        </>
    );
}