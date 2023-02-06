import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useUserRole from '../../Hook/useUserRole';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [role] = useUserRole(user);

    // const { isLoading, data, refetch } = useQuery(('user'), () => fetch(``, {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // })
    //     .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>My <span className='text-primary'>Profile</span></span>
            </h1>
            <div className='card w-10/12 mx-auto shadow-lg bg-white'>
                <div className="card-body">

                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{user?.displayName}</h2>
                            <h2 className="text-xl font-semibold my-5 lg:text-2xl">{user?.email}</h2>

                            <p className=" lg:text-lg my-2 p-3 badge badge-success">Role: {role?.role}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;