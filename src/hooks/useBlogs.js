import { useEffect, useState } from "react";

const useBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])

    return [allBlogs];
}
export default useBlogs;