import React, { useId, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/auth';
import Logo from '../assets/jfc-logo.png';
import MenuHamburger from '../assets/menu.svg';
import CloseMenu from '../assets/close.svg';
import './components.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: useId(),
      path: '/',
      name: 'Laborers',
    },
    {
      id: useId(),
      path: '/reservations',
      name: 'Reservations',
    },
    {
      id: useId(),
      path: '/createlaborer',
      name: 'Add Laborer',
    },
    {
      id: useId(),
      path: '/delete-laborers',
      name: 'Delete Laborer',
    },
  ];

  const openMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    navigate('/login');
    navigate(0);
  };

  return (
    <>
      <div className="divH-C">
        <button className="buttonH-C" onClick={(e) => openMenu(e)} type="button" id="menu-options">
          <img className="iconH-C" src={isOpen ? CloseMenu : MenuHamburger} alt="hamburger-menu" />
        </button>
      </div>
      <aside className={isOpen ? 'open sidebar' : 'sidebar'}>
        <nav className="nav d-flex flex-column my-5">
          <div className="">
            <img className="logo mx-5" src={Logo} alt="jobforcash-logo" />
          </div>
          <ul className="my-5">
            {navLinks.map(({ id, path, name }) => (
              <li key={id} className="rounded-4">
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#97bf0f' : '#fff',
                  })}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li className="my-4">
              <button
                className="btn btn-outline-light custom-lime mx-3 border border-light"
                type="button"
                onClick={logout}
              >
                <strong>Log Out</strong>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

Sidebar.defaultProps = {
  currentUser: 'user',
};
