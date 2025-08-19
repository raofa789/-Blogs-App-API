import { useHref, useNavigate } from "react-router";
import CMSRoutes from "./cms-routes";
import WebRoutes from "./web-routes";

let AppRoutes = () => {
  let navigate = useNavigate(); 
  let href = useHref();
  console.log(href);
  return (
    <>
      <CMSRoutes />
      <WebRoutes />
    </>
  );
};

export default AppRoutes;
