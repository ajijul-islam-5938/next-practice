import { Spinner } from '@nextui-org/react';
import React from 'react';

const loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Spinner label="Data is Coming" color="danger" labelColor="danger"/>
        </div>
    );
};

export default loading;