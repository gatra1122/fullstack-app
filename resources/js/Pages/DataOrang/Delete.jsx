import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { router } from '@inertiajs/react'

function Delete(properti) {

    function deletePost(id) {
        // router.delete(`/post/${id}`);
        //router.delete();

        router.delete(route('dataorang.hapus', id), {
            onSuccess: (page) => {
                console.log('SUCCESS '+page)
                router.visit(route('dataorang.index'), { method: 'get' })
            },
            onError: (errors) => {console.log('ERROR '+errors)},
          })

        //datatable();
        handleOpen(null)
        console.log(id+' '+properti.nama)
        //router.reload()
    }

    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);

    return (
        <>
            <div className="mb-3 flex gap-3">
                <button onClick={() => handleOpen("xs")}>
                <FontAwesomeIcon icon={faTrash} className='text-2xl text-red-600 hover:animate-wiggle' />
                </button>
            </div>
            <Dialog
                open={size === "xs"}
                size={size || "xs"}
                handler={handleOpen}
            >
                <DialogHeader>Yakin hapus ?</DialogHeader>
                <DialogBody>Anda akan menghapus data <i><b>{properti.nama}</b></i></DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={() => deletePost(properti.id)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );

}

export default Delete