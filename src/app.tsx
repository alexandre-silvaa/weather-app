import Providers from "./shared/contexts/providers";
import Outlet from "./shared/routes/router.outlet";

function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}

export default App;
