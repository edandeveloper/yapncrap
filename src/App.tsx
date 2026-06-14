import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import Home from './pages/Home.tsx';
import PostPage from './pages/PostPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
