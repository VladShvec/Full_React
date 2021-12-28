import AppStyles from "../AppStyles.css"
import PostItem from "../components/PostItem";
import React, {useEffect, useMemo, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import SortList from "../components/SortList";
import {Input} from "../components/PostForm";
import {PostButton} from "../components/PostItem";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import {usePosts} from "../components/hooks/usePosts";
import axios from "axios";
import PostSevice from "../components/API/PostService";
import Loader from "../components/Loader/Loader";
import {getPageCount, getPagesArray} from "../components/pages";
import styled from "styled-components"

const PaginationContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const CircleButton = styled.button`
  margin: 20px;
  width: 50px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #c1ff63;
  color: #c1ff63;


`

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pagesArray = getPagesArray(totalPages)


    useEffect(() => {
        fetchPosts()
    }, [page])
    //Добавление поста
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
    }

    //Фетч запрос
    async function fetchPosts() {
        setIsLoading(true)
        setTimeout(async () => {
            const response = await PostSevice.getAll(limit, page)
            setPosts(response.data)
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
            setIsLoading(false)
        }, 1000)

    }

    //Удаление поста через каллбэк
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    return (
        <div className="App">
            <PostButton style={{margin: '20px'}} onClick={fetchPosts}>
                Загрузить посты
            </PostButton>
            <PostButton style={{margin: '20px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </PostButton>
            <hr style={{margin: '15px 20px'}}/>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                isLoading
                    ? <div style={{display: "flex", justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    : <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
            }
            <PaginationContainer>
                {pagesArray.map(p =>
                    <CircleButton
                        key={p}
                        onClick={() => changePage(p)}
                        className={page === p ? 'page__current' : 'page'}>
                        {p}
                    </CircleButton>
                )}
            </PaginationContainer>
        </div>
    );
}

export default Posts;
