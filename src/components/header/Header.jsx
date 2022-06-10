import React from 'react';
import '../header/css/Header.css';

const Header = () => {

    const pathname = window.location.pathname;

    return (
        <div className='content-header'>
            <div className='content-header-flex'>
                <div className='content-header-flex-sub'>
                    <div className='content-header-circle-active'>1</div>
                    <div className='content-header-title'>
                        Delivery
                    </div>
                </div>
                <div className='content-header-flex-sub'>
                    <div className='content-header-arrow'>{">"}</div>
                </div>
                <div className='content-header-flex-sub'>
                    <div className={(pathname === '/payment' || pathname === '/finish') ? 'content-header-circle-active' : 'content-header-circle-inactive'}>2</div>
                    <div className='content-header-title'>
                        Payment
                    </div>
                </div>
                <div className='content-header-flex-sub'>
                    <div className='content-header-arrow'>{">"}</div>
                </div>
                <div className='content-header-flex-sub'>
                    <div className={(pathname === '/finish') ? 'content-header-circle-active' : 'content-header-circle-inactive'}>3</div>
                    <div className='content-header-title'>
                        Finish
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Header