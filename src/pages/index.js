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
      <div className=" bg-gray-900 text-white overflow-hidden">
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
