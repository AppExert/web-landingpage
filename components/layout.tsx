import Meta from "./meta";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Meta />
      <div className="bg-[#020013] "   style={{
        backgroundImage:
        router.pathname === "/" || router.pathname === "/developers"
          ? "url('/images/home/shape.png')"
          : "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center"
      }}  >
        <Header />
        <main style={{ minHeight: "calc(100vh - 62px)" }} >{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
