import React from 'react'
import pic from '../UserInfo/avatar-2388584.png'
import './UserInfo.css'
import pic2 from '../UserInfo/54790.jpg'
import pic3 from '../UserInfo/316225-P94QSQ-322.jpg'
import pic4 from '../UserInfo/password.png'
import pic5 from '../UserInfo/logout.png'

function UserInfo() {
    let subMenu=document.getElementById('subMenu');
    function togglemenu(){
        // subMenu.classList.toggle("open-menu");
        subMenu.classList.toggle("open-menu");
        
    }
    return (
        <>
    <div className='hero'>
                <nav className='dash_nav'>
                    <img src={pic} className="user-pic" alt='pic' onClick={togglemenu}/>
                </nav>
                <div className='sub-menu-wrap' id='subMenu'>
                    <div className='sub-menu'>
                        <div className='user-info'>
                        <img src={pic} className="user-pic" alt='pic'/>
                        <h5>Nikhil Thakur</h5>
                        </div>
                        <hr/>
                        <a href='#' className='submenu-link'>
                        <img src={pic2} className="user-pic" alt='pic'/>
                        <p>Email</p>
                        </a>
                        <a href='#' className='submenu-link'>
                        <img src={pic3} className="user-pic" alt='pic'/>
                        <p>ID</p>
                        </a>
                        <a href='#' className='submenu-link'>
                        <img src={pic4} className="user-pic" alt='pic'/>
                        <p>Forgot Password</p>
                        </a>
                        <a href='#' className='submenu-link'>
                        <img src={pic5} className="user-pic" alt='pic'/>
                        <p style={{color:"red"}}>Logout</p>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserInfo