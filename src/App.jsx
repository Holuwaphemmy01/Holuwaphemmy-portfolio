import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { BlogPage } from './pages/BlogPage.jsx';
import { BlogDetailPage } from './pages/BlogDetailPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { ExperiencePage } from './pages/ExperiencePage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ProjectDetailPage } from './pages/ProjectDetailPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ResumePage } from './pages/ResumePage.jsx';

export function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 [background-image:linear-gradient(rgba(15,23,42,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.15)_1px,transparent_1px)] [background-size:92px_92px] font-mono antialiased selection:bg-cyan-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(132,204,22,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.98))]" />
      <Header />
      <main className="mx-auto w-[min(1180px,calc(100%-32px))] py-[clamp(32px,7vw,86px)] max-[620px]:w-[min(100%-24px,1180px)] max-[620px]:pt-7">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
    </div>
  );
}
