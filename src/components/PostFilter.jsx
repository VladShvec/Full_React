import React from 'react';
import {Input} from "./PostForm";
import SortList from "./SortList";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                style={{margin: '0px 20px'}}
                placeholder="Название для поиска"
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <SortList
                defaultValue="Сортировка по"
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'По название'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;