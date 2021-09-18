import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

export default function header() {


    return (

        <div className="Navbar-container">

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand><Link href="/"><img className="log" src="/final.jpg" /></Link></Navbar.Brand>

                <Navbar.Toggle className="toggle-btn" aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className="collapse" id="responsive-navbar-nav">

                    <Nav className="Navbar">

                        <Link href="/Page1/Top5"><nav className="b">Products</nav></Link>

                        <Link href="/Page2/Info"><nav className="b">Info</nav></Link>

                        <Link href="/Page3/Benefits"><nav className="b">Benefits</nav></Link>

                        <Link href="/Page4/Store"><nav className="b">Store</nav></Link>



                        <div className="search-box">
                            <button className="btn-search">

                                <BsSearch className="search-icon" />

                            </button>

                            <input type="text" className="input-search" placeholder="Type to Search..." />

                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}