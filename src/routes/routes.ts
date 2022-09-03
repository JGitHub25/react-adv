import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

export interface RouteInterface {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: RouteInterface[];
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: RouteInterface[] = [
  { path: "/lazyLoaded", Component: LazyLayout, name: "Lazy loading nested" },
  { path: "/no-lazy", Component: NoLazy, name: "No Lazy" },
];
