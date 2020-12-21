import React from 'react';

const ErrorIndicator = (props) => {
    const {errorMessage = 'Error'} = props;

    return (
        <div className='not-found'>
            <div className='not-found__title'>
                {errorMessage}
            </div>
        </div>
    );
};

export default ErrorIndicator;