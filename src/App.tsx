import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
// import { BlogPage } from './pages/BlogPage';
// import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResumePage } from './pages/ResumePage';

export function App() {
  return (
    <div className="app-grid-bg min-h-screen bg-white font-mono antialiased selection:bg-cyan-300 selection:text-black text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100 dark:selection:bg-cyan-500 dark:selection:text-white">
      <div className="app-ambient-bg fixed inset-0 -z-10" />
      <Header />
      <main className="mx-auto w-[min(1180px,calc(100%-32px))] py-[clamp(32px,7vw,86px)] max-[620px]:w-[min(100%-24px,1180px)] max-[620px]:pt-7">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogDetailPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
