import { lazy } from "react";

type JSXComponent = () => JSX.Element;

export interface RouteInterface {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: RouteInterface[];
}

const LazyPage1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: RouteInterface[] = [
  { path: "/lazy1", Component: LazyPage1, name: "Lazy 1" },
  { path: "/lazy2", Component: LazyPage2, name: "Lazy 2" },
  { path: "/lazy3", Component: LazyPage3, name: "Lazy 3" },
];
