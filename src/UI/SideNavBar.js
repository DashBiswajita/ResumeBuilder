import Styles from './SideNavBar.module.scss';
import {useCallback, useState} from 'react';
let SideNavBar = (props) => {
    let [activeMenu, setActiveMenu] = useState('Intro');
    const navMenus = [{
        icon : '',
        iconLabel : 'Intro'
    },
    {
        icon : '',
        iconLabel : 'Social'
    },
    {
        icon : '',
        iconLabel : 'Skills'
    },
    {
        icon : '',
        iconLabel : 'Experience'
    },
    {
        icon : '',
        iconLabel : 'Education'
    },
    {
        icon : '',
        iconLabel : 'Awards'
    },
    {
        icon : '',
        iconLabel : 'Certification'
    }
    ];
    const clickHandler = useCallback(
      (navMenu) => {
         return (event) => {
             event.preventDefault();
             props.onMenuClick(navMenu);
             setActiveMenu(navMenu.iconLabel);
         }
      },
      [],
    )
    
    return (
        <div className={`${Styles.sideNavBar} l-navbar`} id="nav-bar">
            <nav className='nav'> 
               <div className='nav-list'>
                    {navMenus.map(ele => <a key={ele.iconLabel} className={`nav-link ${Styles['sideNavBar-navLink']} ${activeMenu === ele.iconLabel ? Styles.active : ''}`} onClick={clickHandler(ele)}><span className='navName'>{ele.iconLabel}</span></a>
                    )}
               </div>

            </nav>
        </div>
    )
}

export default SideNavBar;