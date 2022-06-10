import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {
    const [allBlogs] = useBlogs();
    return (
        <div className='max-w-7xl mx-auto py-12 px-5' >
            <div>
                <h4 className='font-bold text-6xl text-center'>Blogs</h4>

            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allBlogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }

            </div>

        </div>
    );
};

export default Blog;