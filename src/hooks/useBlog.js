import { useEffect, useState } from "react"
const useBlog = (id) => {

    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('../blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])


    const blogDetails = allBlogs.find(blog => blog.id == id);
    return { blogDetails }
}
export default useBlog;