import React from 'react';
import { useParams } from 'react-router-dom';
import useBlog from '../../../../hooks/useBlog';

const BlogDetails = () => {
    const { blogId } = useParams();
    const { blogDetails } = useBlog(blogId)
    console.log(blogDetails)

    return (
        <div className='max-w-7xl mx-auto py-12 px-5' >
            <div className='flex justify-center'>
                <img src={blogDetails?.img} />
            </div>
            <div className='mt-5'>
                <h4 className='text-2xl font-semibold'>{blogDetails?.name}</h4>
                <p className='mt-3'>{blogDetails?.des}</p>

            </div>

        </div>
    );
};

export default BlogDetails;