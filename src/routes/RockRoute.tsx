import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "component/pages/MainPage";
import SecondPage from "component/pages/SecondPage";
import ThirdPage from "component/pages/ThirdPage";
import FourthPage from "component/pages/FourthPage";
import FifthPage from "component/pages/FifthPage";

const RockRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/" element={<SecondPage />}></Route>
      <Route path="/" element={<ThirdPage />}></Route>
      <Route path="/" element={<FourthPage />}></Route>
      <Route path="/" element={<FifthPage />}></Route>
    </Routes>
  );
};

export default RockRoutes;
