import {useRouteError} from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

interface IRouteError {
  status: number,
  statusText: string,
  internal: boolean,
  data: string,
  error: Object,
}


export const ErrorPage = () => {
  const routeError: Partial<IRouteError> = useRouteError() as Partial<IRouteError>;
  return (
    <>
      <Header/>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
          fontSize: "64px",
          color: "#E6332A",
          background: "#1F1C1C",
          textAlign: "center",
          height: "90vh",
          width: "100vw",
        }}>
        {routeError && `Error ${routeError.status} ${routeError.statusText}`}
      </div>
      <Footer/>
    </>
  )
}