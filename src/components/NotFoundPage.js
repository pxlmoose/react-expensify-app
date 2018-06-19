import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
     {/* Link will make sure to use client side routing to pages you control (so no twitter links)*/}
    404! - <Link to="/">Go home</Link>         
    </div>
);

export default NotFoundPage;