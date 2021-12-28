import React, {useState} from 'react';
import styled from "styled-components"
import {PostButton} from "./PostItem";

const Input = styled.input`
  font-size: 20px;
  background-color: transparent;
  border: 2px solid greenyellow;
  color: cadetblue;
  padding: 13px 8px;
  margin-bottom: 20px;
  margin-top: 10px;
`
export {Input}

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
        console.log(post)
    }
    return (
        <form style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
            <Input
                type="text"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                placeholder="Название поста"/>
            <Input
                type="text"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                placeholder="Описание поста"/>
            <PostButton onClick={addNewPost}>Добавить пост</PostButton>
        </form>
    );
};

export default PostForm;