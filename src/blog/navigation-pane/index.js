import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];
  //console.log(active)
return (
   <div className="list-group">
     <a className="list-group-item">
      <div className="d-block d-xl-none"><i className="bi bi-fonts"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-fonts"></i> Tuiter</div> </a>
     <Link to="/" className={`list-group-item
                    ${(active === undefined || active === 'home' || active === '')?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-house-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-house-fill"></i> Home</div>
     </Link>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-bell-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-bell-fill"></i> Notifications</div>
     </a>
     <Link to="/profile" className={`list-group-item
                    ${(active === 'profile' || active === 'edit-profile')?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-person-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-person-fill"></i> Profile</div>
     </Link>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-three-dots"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-three-dots"></i> More</div>
     </a>
   </div>
 );
};
export default NavigationSidebar;