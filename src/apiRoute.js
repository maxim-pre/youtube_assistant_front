let apiRoute;
const port = 8000;
const apiUrls = {
  development: `http://localhost:${port}/api/`,
  production: `https://frozen-caverns-09464.herokuapp.com/`,
};
if (window.location.hostname === "localhost") {
  apiRoute = apiUrls.development;
} else {
  apiRoute = apiUrls.production;
}

export default apiRoute;
