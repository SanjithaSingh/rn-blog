import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: `Blog Post #${state.length + 1}`
            }];
        case 'deleteBlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'addBlogPost' })
    };
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);