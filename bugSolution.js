import { useSearchParams, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>About</h1>
      <pre>{JSON.stringify(Object.fromEntries(searchParams), null, 2)}</pre>
    </>
  );
}

function NoMatch() {
  return <h1>404 Not Found</h1>;
} 