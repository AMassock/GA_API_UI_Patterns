import {Link, Outlet} from 'react-router-dom'
import React from 'react';
import { Header } from '../pages';

export default function Layout (){
    return (
        <div className="nav">
            <Header />
            <Outlet />
        </div>
    )

} 