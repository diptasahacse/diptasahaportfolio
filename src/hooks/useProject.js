import { useEffect, useState } from "react"
import useProjects from "./useProjects";

const useProject = (id) => {

    const [allProjects, setAllProjects] = useState([]);
    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])


    const projectDetails = allProjects.find(project => project.id == id);
    return { projectDetails }
}
export default useProject;