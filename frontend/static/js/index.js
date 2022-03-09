import aboutPage from "./views/aboutPage.js";
import contactPage from "./views/contactPage.js";
import experiencesPage from "./views/experiencesPage.js";
import projectsPage from "./views/projectsPage.js";
import skillsPage from "./views/skillsPage.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async() => {
    const routes = [
        { path: "/", view: aboutPage },
        { path: "/about", view: aboutPage },
        { path: "/contact", view: contactPage },
        { path: "/experiences", view: experiencesPage },
        { path: "/projects", view: projectsPage },
        { path: "/skills", view: skillsPage }
    ];
    console.log("made it to router")
        // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            console.log("yo")
            navigateTo(e.target.href);
        }
    });

    router();
});