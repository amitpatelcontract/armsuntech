import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PageNotFound = lazy(() => import("../pages/page-not-found"));
const Home = lazy(() => import("../pages/home"));

const Routers = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
