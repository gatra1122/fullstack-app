import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

function Layout({ children }) {

    //destruct props "auth"
    const { auth } = usePage().props;    

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">LARAVEL + INERTIA.JS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            { auth.user
                                
                                ?   <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/dashboard">DASHBOARD</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/logout" method="POST">LOGOUT</Link>
                                        </li>
                                    </ul>
                                
                                :   <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/login">LOGIN</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/register">REGISTER</Link>
                                        </li>
                                    </ul>
                            }
                            
                            
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container" style={{ marginTop: '100px' }}>
                {children}
            </main>
        </>
    )

}

export default Layout