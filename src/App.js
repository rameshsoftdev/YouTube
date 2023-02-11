import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./components/utils/store/index";
import { Provider } from "react-redux";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="AppLayout">
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
