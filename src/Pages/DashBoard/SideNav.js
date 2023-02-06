import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useUserRole from '../../Hook/useUserRole';

const SideNav = () => {
    const { user } = useContext(AuthContext);
    const [role] = useUserRole(user);
    console.log(role);

    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            <li><Link to=''>My Profile</Link></li>
            {
                role.role === 'buyer' && <>
                    <li><Link to='booking'>My orders</Link></li>
                    {/* <li><Link to='my-WishList'>My WishList</Link></li> */}
                </>
            }
            {
                role.role === 'seller' && <>
                    <li><Link to='seller-post'>My Product</Link></li>
                    <li><Link to='add-a-product'>Add A Product</Link></li>
                    <li><Link to='buyers'>My Buyers</Link></li>
                </>
            }
            {
                role.role === 'admin' && <>
                    <li><Link to='allSeller'>All Seller</Link></li>
                    <li><Link to='allBuyer'>All Buyers</Link></li>
                    <li><Link to='reportedItems'>Reported Items</Link></li>
                </>
            }

        </ul>
    );
};

export default SideNav;