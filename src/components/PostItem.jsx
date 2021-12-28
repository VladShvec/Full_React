import React from 'react';
import styled from "styled-components"
import {useParams} from "react-router-dom";

const MainPostContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  padding: 0px 10px;
`
const PostContent = styled.div`

`
const PostTitle = styled.strong`
  font-size: 30px;
`
const PostBody = styled.div`
  font-size: 25px;
`
const PostBtn = styled.div`

`
const PostButton = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: 2px solid greenyellow;
  color: cadetblue;
  padding: 6px 20px;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`
export {PostButton}


const PostItem = (props) => {
    return (
        <MainPostContainer>
            <PostContent>
                <PostTitle>{props.post.title}</PostTitle>
                <PostBody>{props.post.body}</PostBody>
            </PostContent>
            <PostBtn>
                <PostButton onClick={() => props.remove(props.post)}>Delete</PostButton>
            </PostBtn>
        </MainPostContainer>

    );
};

export default PostItem;