import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={blog?.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{blog?.name}</h2>
                <p>{blog?.des.length > 70 ? blog?.des.slice(0, 70) : blog?.des}</p>
                <div class="card-actions justify-end">
                    <Link  class="btn btn-primary" to={`/blog/${blog?.id}`}>Read More</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default BlogCard;