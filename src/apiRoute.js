let apiRoute;
const port = 8000;

const apiUrls = {
  development: `http://localhost:${port}/api/`,
  production: `https://youtubeassistant-371ce8d1642b.herokuapp.com/api/`,
};
if (window.location.hostname === "localhost") {
  apiRoute = apiUrls.development;
} else {
  apiRoute = apiUrls.production;
}

export default apiRoute;
