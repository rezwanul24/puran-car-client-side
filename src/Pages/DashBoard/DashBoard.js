import React from 'react';
import {CgArrowRightO} from 'react-icons/cg';
import { Outlet } from 'react-router-dom';
import UseTitle from '../../Hook/useTitle';
import SideNav from './SideNav';
const DashBoard = () => {
    UseTitle('Dashboard');
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   bg-base-300">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden sticky top-0 z-50"><CgArrowRightO className='text-3xl'></CgArrowRightO></label>
                <Outlet></Outlet>
            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <SideNav></SideNav>

            </div>
        </div>
    );
};

export default DashBoard;