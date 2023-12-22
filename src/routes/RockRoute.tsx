import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../component/MainPage";
import SecondPage from "component/SecondPage";
import ThirdPage from "component/ThirdPage";
import FourthPage from '../component/FourthPage';

const RockRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/" element={<SecondPage />}></Route>
      <Route path="/" element={<ThirdPage />}></Route>
      <Route path="/" element={<FourthPage />}></Route>
    </Routes>
  );
};

export default RockRoutes;
