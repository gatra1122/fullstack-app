import React, { useState } from 'react';

function Sidebar(properti) {
    const [hideSidebar, setHideSidebar] = useState();

    return (
        <>
        <div className="bg-purple-100 h-screen w-64">
                <ul>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                </ul>
        </div>

        </>
    );

}

export default Sidebar