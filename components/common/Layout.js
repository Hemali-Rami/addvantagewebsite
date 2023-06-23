import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
const Layout = ({ children }) => {
  const router = useRouter();
  const headerClassName = router.pathname === "/bookdemo" ? "scroll" : "";

  //loader
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  const teamFormRef = useRef(null);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mainbody">
          <Header headerClassName={headerClassName} teamFormRef={teamFormRef} />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};
export default Layout;
