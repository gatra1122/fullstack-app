import React from 'react';

function Footer() {
    return (
        <>
            <div className="flex w-full flex-wrap items-center justify-center gap-6 py-2 px-4 md:justify-between">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
                    © 2024, <b>Nama Aplikasi</b>
                </p>
                <ul className="flex items-center gap-4">
                    <li>
                        <a
                            href="https://github.com/gatra1122"
                            target="_blank"
                            className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-[#3F72AF]"
                        >
                            Developed by <b>Gatra</b>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Footer