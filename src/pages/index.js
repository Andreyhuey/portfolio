import {
  Header,
  About,
  Banner,
  Contact,
  Services,
  Work,
  Tools,
} from "../components";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-900 text-white overflow-hidden xs:p-2">
        <Header />
        <Banner />
        <About />
        <Services />
        <Tools />
        <Work />
        <Contact />
      </div>
    </>
  );
}
