import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./routes";

import { Landing } from "../pages/Landing";
import { Roommates } from "../pages/Roommates";
import { CreateRoommate } from "../pages/CreateRoommate";
import { Roommate } from "../pages/Roommate";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Landing} element={<Landing />} />
        <Route path={AppRoute.Roommates} element={<Roommates />} />
        <Route path={`${AppRoute.Roommates}/:id`} element={<Roommate />} />
        <Route path={AppRoute.CreateRoommate} element={<CreateRoommate />} />
      </Routes>
    </BrowserRouter>
  );
}
