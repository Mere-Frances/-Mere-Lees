import {Routes, Route} from 'react-router-dom';

// pages
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ProjectsPage from '../pages/ProjectsPage';
import GraphicsPage from '../pages/GraphicsPage';

const Links = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/graphics' element={<GraphicsPage />} />
      </Routes>
  )
}

export default Links
