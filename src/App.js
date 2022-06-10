import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProjectDetails from './components/Home/Projects/ProjectDetails/ProjectDetails';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogCard/BlogDetails/BlogDetails';
const queryClient = new QueryClient()
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/project/:projectId' element={<ProjectDetails></ProjectDetails>}></Route>
          <Route path='/blog/:blogId' element={<BlogDetails></BlogDetails>}></Route>


        </Routes>
        <Footer></Footer>
      </QueryClientProvider>



    </div>
  );
}

export default App;
