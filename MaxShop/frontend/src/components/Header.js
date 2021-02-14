import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className='container-fluid'>
                    <div className='row w-100'>
                        <div className='col my-auto'>
                            <Link className="navbar-brand text-white" to="/">MaxShop</Link>
                            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className='col'>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link text-white ps-5 float-left" to="/cart"><i className='fas fa-shopping-cart'></i> Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login"><i className='fas fa-user'></i> Sign In</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                </div> 
            </nav>
        </>
    )
}

export default Header
