import React, { useState } from 'react';

const SideBar = ({ setComponent }) => {
    const handleClick = (component) => {
        setComponent(component);
    };

    return (
        <div className='rounded bg-C415A77 h-full p-4'>
            <ul className="list-none">
                <li>
                    <button onClick={() => handleClick('ForTomorrow')} className="w-full">
                        <div className='rounded bg-CE0E1DD h-10 text-base mb-2 py-4'>Due Tomorrow!</div>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('Today')} className="w-full">
                        <div className='rounded bg-CE0E1DD h-10 text-base mb-2 py-4'>My day</div>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('Week')} className="w-full">
                        <div className='rounded bg-CE0E1DD h-10 text-base mb-2 py-4'>My week</div>
                    </button>
                </li>
                {/* <li>
                    <button onClick={() => handleClick('Month')} className="w-full">
                        <div className='rounded bg-CE0E1DD h-10 text-base mb-2 py-4'>My month</div>
                    </button>
                </li> */}
            </ul>
        </div>
    );
};

export default SideBar;
