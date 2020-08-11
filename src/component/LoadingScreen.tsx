import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const LoadingScreen = () => {
    return (
        <div className='bg-light position-fixed w-100 h-100 t-0' style={style.loadingScreen}>
            <div className='m-4 d-inline-block float-right'>
                <h5 className='align-middle d-inline-block my-0 mr-2'>Loading</h5>
                <Spinner animation="grow" className='align-middle' />
            </div>
        </div>
    );
};

const style: any = {
    loadingScreen: {
        zIndex: 1000,
    },
};

export default LoadingScreen;
