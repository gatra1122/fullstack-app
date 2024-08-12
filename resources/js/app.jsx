import React from 'react'
import {createRoot} from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createInertiaApp({
    progress: {
        color: "#039be5",
    },
    title: (title) => `${title} - Nama Aplikasi`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<><App {...props} /><ToastContainer autoClose={4000}/></>);
    },
});

