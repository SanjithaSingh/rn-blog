import React, { useState, useReducer } from 'react';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
}

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    const addBlogPost = () => {
        dispatch({ type: 'addBlogPost' })
    }


    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;