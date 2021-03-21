import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const customStyles = ['btn--primary', 'btn--outline'];
const customSize = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, styleBtn, sizeBtn }) => {
    const checkStyle = customStyles.includes(styleBtn) ? styleBtn : customStyles[0];
    const checkSize = customSize.includes(sizeBtn ? sizeBtn : customSize[0]);
    return (
        <Link to="/sign-up" className='btn-mobile'>
            <button
                className={`btn ${checkStyle} ${checkSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}