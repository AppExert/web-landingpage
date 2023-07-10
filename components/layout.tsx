import Meta from "./meta";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="bg-[#020013] "  style={{ backgroundImage: "url('/images/home/shape.png')", backgroundRepeat: "no-repeat",  backgroundPosition: "top center"  }}    >
        <Header />
        <main style={{ minHeight: "calc(100vh - 62px)" }} >{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
