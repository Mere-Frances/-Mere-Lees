import {Routes, Route} from 'react-router-dom';

// pages
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import MyWork from '../pages/MyWorkPage';
import GraphicsPage from '../pages/GraphicsPage';
import ProjectDetail from '../pages/ProjectDetail';
import Projects from '../components/Projects';

const Links = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<MyWork />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/graphics' element={<GraphicsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
  )
}

export default Links
