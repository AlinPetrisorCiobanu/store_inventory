import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Movements } from "../Movements/Movements";
import { Products } from "../Products/Products";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/movements" element={<Movements />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};
