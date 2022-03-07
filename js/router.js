/*
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
	console.log(event.target.href);
};
*/

const routes = {
    404: "/pages/404.html",
    "/": "/pages/aboutPage.html",
	"/index.html": "/pages/aboutPage.html",
    "/about": "/pages/aboutPage.html",
    "/experiences": "/pages/experiencesPage.html",
    "/skills": "/pages/skillsPage.html",
    "/projects": "/pages/projectsPage.html",
    "/contact": "/pages/contactPage.html"
};

const handleLocation = async (path) => {
    window.history.pushState({}, "", path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
//window.route = route;

window.handleLocation = handleLocation;
handleLocation("/");
