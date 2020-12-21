import React from 'react';
import {Link} from 'react-router-dom';

export function Page404() {
    return (
        <div className='not-found'>
            <div className='not-found__title'>
                <div className='number'>404</div>
                Вероятнее всего вам <Link to='/' className='not-found__link'>сюда</Link>
            </div>
        </div>
    );
}