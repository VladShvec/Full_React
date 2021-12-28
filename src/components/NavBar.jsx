import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import styled from "styled-components";

const NavBarBox = styled.nav`
  padding: 20px 20px;
  background-color: grey;
`
const Links = styled.span`
  font-size: 22px;
  font-weight: bolder;
  color: black;

`
const NavBar = () => {
    return (
        <>

            <NavBarBox>
                <Link className="linkHref" to="/about"> <Links>About</Links></Link>
                <Link className="linkHref" to="/posts"> <Links>Posts</Links></Link>
            </NavBarBox>
            <Routes>
                <Route path="about" element={<About/>}/>
                <Route path="posts" element={<Posts/>}/>
            </Routes>

        </>
    );
};

export default NavBar;