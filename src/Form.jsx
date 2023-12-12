import React, { useState } from 'react';

const BlogForm = () => {
    const [postTitle, setPostTitle] = useState('');
    const [posts, setPosts] = useState([]);

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (postTitle.trim() !== '') {
            setPosts([...posts, postTitle]);
            setPostTitle('');
        }
    };

    const handleDeleteArticle = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Titolo dell'articolo:
                    <input type="text" value={postTitle} onChange={handleTitleChange} />
                </label>
                <button type="submit">Aggiungi articolo</button>
            </form>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        {post}
                        <span
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                            onClick={() => handleDeleteArticle(index)}
                        >
                            <span className='icon'>&#10007;</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default BlogForm;