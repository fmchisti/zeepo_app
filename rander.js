import routeWiseActionCreate from "./routeWiseAction";

const rander = (e) => {
  const route = {};
  const mainRoute = e?.detail?.to;
  route.params = mainRoute?.params;
  route.locationId = mainRoute?.params["location_id"];
  route.path = mainRoute?.path;
  route.activePage = mainRoute?.name;
  routeWiseActionCreate(route);
};

export default rander;
