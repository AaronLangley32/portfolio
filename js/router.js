const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/aboutPage.html",
    "/about": "/pages/aboutPage.html",
    "/experiences": "/pages/experiencesPage.html",
    "/skills": "/pages/skillsPage.html",
    "/projects": "/pages/projectsPage.html",
    "/contact": "/pages/contactPage.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main_page").innerHTML = html;
    console.log("yo");
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();