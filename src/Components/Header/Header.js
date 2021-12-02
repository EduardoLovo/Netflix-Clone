// React
import React from 'react';

// CSS
import './Header.css';

// ================================================


export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png" alt="logoNetflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU" alt="logoUser"/>
                </a>
            </div>
        </header>
    )
}
