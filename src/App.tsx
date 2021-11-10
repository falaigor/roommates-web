import AppRoutes from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/global";

import "leaflet/dist/leaflet.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}
