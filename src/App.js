// import AppStyles from "./AppStyles.css"
// import PostItem from "./components/PostItem";
// import React, {useEffect, useMemo, useState} from "react";
// import PostList from "./components/PostList";
// import PostForm from "./components/PostForm";
// import SortList from "./components/SortList";
// import {Input} from "./components/PostForm";
// import {PostButton} from "./components/PostItem";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/MyModal/MyModal";
// import {usePosts} from "./components/hooks/usePosts";
// import axios from "axios";
// import PostSevice from "./components/API/PostService";
// import Loader from "./components/Loader/Loader";
// import {getPageCount, getPagesArray} from "./components/pages";
// import styled from "styled-components"
// const PaginationContainer = styled.div`
//   margin: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `
// const CircleButton = styled.button`
//   margin: 20px;
//   width: 50px;
//   height: 30px;
//   background-color: transparent;
//   border-radius: 50%;
//   border: 2px solid #c1ff63;
//   color: #c1ff63;
//
//
// `
import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import styled from 'styled-components'
import NavBar from "./components/NavBar";


function App() {
    return (
        <>
            <NavBar/>

        </>
    )
}

export default App;
