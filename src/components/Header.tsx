// src/components/Header.tsx
import React from 'react';
import 'styles/HeaderStyles.css';
import { Link } from 'react-router-dom';
import { APP_TEXTS } from 'constants/textPaths';
import { IMAGE_PATHS } from 'constants/imagePaths';
import Breadcrumbs from './Breadcrumbs';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className='logo-breadcrumb-space'>
            <div className="logo">
                <img src={IMAGE_PATHS.LOGO} alt={APP_TEXTS.APP_NAME} />
            </div>
            <Breadcrumbs />
            </div>
            <Link to="/">{APP_TEXTS.APP_NAME}</Link>
        </header>
    );
};

export default Header;
