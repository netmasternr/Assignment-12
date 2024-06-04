import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill, BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdManageAccounts, MdManageHistory, MdOutlineManageAccounts, MdPayment } from 'react-icons/md'
import UseAuth from '../../Hooks/useAuth/useAuth'
import { FaUserLarge } from 'react-icons/fa6'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { Tabs } from "flowbite-react";
import { IoAnalytics } from 'react-icons/io5'
import { GiArchiveRegister } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'


const Sidebar = () => {
    const { logOut } = UseAuth();

    const [isActive, setActive] = useState(false)

    // useEffec(() => {
    //     // Navigate to 'Organizer' route by default
    //     navigate('/Organizer');
    // }, [navigate]);

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>

            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                width='100'
                                height='100'
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>



            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                <img
                                    // className='hidden md:block'
                                    src='https://i.ibb.co/4ZXzmq5/logo.png'
                                    alt='logo'
                                    width='100'
                                    height='100'
                                />
                            </Link>
                        </div>
                    </div>

                    <Tabs className='mt-3' aria-label="Pills" style="pills">
                        {/* organizer tab */}
                        <Tabs.Item active title="Organizer"  >
                            <div>
                                <NavLink
                                    to='OrganizerProfile'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserLarge className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Organizer Profile</span>
                                </NavLink>

                                {/* Add A Camp */}
                                <NavLink
                                    to='addCamp'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <IoMdAddCircleOutline className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Add A Camp</span>
                                </NavLink>

                                {/* Manage Camps */}
                                <NavLink
                                    to='manageCamp'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <MdManageAccounts className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Manage Camps</span>
                                </NavLink>

                                {/* Manage Registered Camps */}
                                <NavLink
                                    to='ManageRegisteredCamp'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <MdManageHistory className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Manage Registered Camps</span>
                                </NavLink>
                            </div>

                        </Tabs.Item>

                        {/* perticipant tab */}
                        <Tabs.Item title="Participant">
                            <div>
                                <NavLink
                                    to='perticipantProfile'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserCircle className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Participant Profile</span>
                                </NavLink>

                                {/* Add A Camp */}
                                <NavLink
                                    to='analytics'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <IoAnalytics className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Analytics</span>
                                </NavLink>

                                {/* Manage Camps */}
                                <NavLink
                                    to='RegisteredCamps'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <GiArchiveRegister  className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Registered Camps</span>
                                </NavLink>

                                {/* Manage Registered Camps */}
                                <NavLink
                                    to='PaymentHistory'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <MdPayment className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Payment History</span>
                                </NavLink>
                            </div>

                        </Tabs.Item>

                    </Tabs>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    {/* <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink> */}

                    <Link to='/'
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar