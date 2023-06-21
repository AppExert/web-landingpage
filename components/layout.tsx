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
      <>
        <Header />
        <main style={{ minHeight: "calc(100vh - 62px)" }}>{children}</main>
      </>
      <Footer />
    </>
  );
};

export default Layout;
