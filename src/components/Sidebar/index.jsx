import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import { Icon } from '@iconify/react';
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const navigation = [
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="mdi-light:home" />,
      name: 'Dashboard',
      path: '/home',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="fa-solid:file-invoice-dollar" />,
      name: 'Transactions',
      path: '/transactions',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="mdi:account" />,
      name: 'Accounts',
      path: '/accounts',
    },

    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="streamline:investment-selection-solid" />,
      name: 'Investments',
      path: '/investments',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:repair" />,
      name: 'Services',
      path: '/services',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:save-money-pound"  />,
      name: 'Loans',
      path: '/loans',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="material-symbols:settings" />,
      name: 'Settings',
      path: '/settings',
    },

    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:two-factor-access" />,
      name: 'My Privileges',
      path: '/privileges',
    },
    {
      icon: <Icon style={{height:'25px',width:'25px'}} icon="hugeicons:two-factor-access" />,
      name: 'test',
      path: '/Dashboard/ECommerce',
    },
  ];

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#FFFFFF] duration-300 ease-linear dark:bg-boxdark lg:static shadow-md	 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 ">
        <NavLink style={{display:'flex', justifyContent:'center' ,justifyItems:'center', textAlign:'center' }} to="/">
          {/* <img src={Logo} alt="Logo" /> */}
          <Icon style={{height:'32px',width:'25px' ,color:'#232323'}} icon="mingcute:task-fill"  />
          <p className='mx-2 text-2xl font-bold text-heading '>Soar Task</p>
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear border border-red-800 ">
        <nav className="py-4 px-4 lg:px-6 ">
          <ul className='w-full'>
            {navigation?.map((navItem) => (
              <li key={navItem.path} className='border border-red-400 w-full'>
                <NavLink
                  to={navItem.path}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium bg-white duration-300 ease-in-out my-4
    ${
      pathname.includes(navItem.path)
        ? 'text-darkText border-l-8 border-[#232323]' // Selected state: dark text, thick left border
        : 'text-lightText' // Default state: light text, no border
    }`}
                >
                  {navItem.icon}
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
