import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Нет постов</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Список постов</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} key={post.id} remove={remove}/>
                    </CSSTransition>
                )}

            </TransitionGroup>
        </div>
    );
};

export default PostList;