import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { CookiesProvider } from "react-cookie";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </CookiesProvider>
  );
}

export default App;
