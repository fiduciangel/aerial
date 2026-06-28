import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import ClassDetail from "./pages/ClassDetail";
import Schedule from "./pages/Schedule";
import Instructors from "./pages/Instructors";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<ClassDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<JournalPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
