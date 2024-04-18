export interface Route {
    url: string;
    element: HTMLElement;
}

const fallbackElement = () => {
    const elem = document.createElement('div');
    elem.innerHTML = 'Not found!';
    return elem;
}

function deadCode() {
    console.log('dead')
}

export class Router {
    constructor(private routes: Array<Route>) {
        this.setRouterLinks();
        const pathname = window.location.pathname !== '/' ? window.location.pathname : '/home';
        this.navigateByURL(pathname);
    }

    private setRouterLinks() {
        const routes = Array.from(document.querySelectorAll('[router-link]'));
        routes.forEach(route => {
            route.addEventListener('click', this.navigate.bind(this), false);
        });
    }

    private navigateByURL(url: string) {
        console.log('hey I am not dropped')
        let elem: HTMLElement | undefined;
        // redirect to the router instance
        let route = this.routes.find(r => r.url === url)
        if (!route) {
            window.history.pushState({}, '', '/error');
            elem = fallbackElement();
        } else {
            if (window.location.pathname !== url) {
                // window.location.pathname = url;
                window.history.pushState({}, '', url);
            }
            elem = route.element;
        }
        const root = document.getElementById('root')
        root.innerHTML = '';
        root.appendChild(elem);
    }

    private navigate(e: any) {
        this.navigateByURL(e.target.attributes[0].value)
    }
}
