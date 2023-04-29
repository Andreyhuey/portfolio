import {
  Nav,
  Header,
  About,
  Banner,
  Contact,
  Services,
  Work,
} from "../components";

export default function Home() {
  return (
    <>
      {/* google fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="bg-zinc-300 text-black/70 dark:bg-gray-900 dark:text-white overflow-hidden">
        <Nav />
        <Header />
        <Banner />
        <About />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </>
  );
}
