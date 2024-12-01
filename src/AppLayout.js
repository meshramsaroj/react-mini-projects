import React from "react";
import { Link, Outlet } from "react-router-dom";
const routes = [
  {
    id: "recipe",
    url: "/recipe",
    title: "Recipe",
  },
  {
    id: "todos",
    url: "/todos",
    title: "Todo",
  },
  // {
  //   id: "",
  //   url: "/",
  //   title: ""
  // },
  // {
  //   id: "",
  //   url: "/",
  //   title: ""
  // },
];

const AppLayout = () => {
  return (
    <div className="grid grid-flow-col gap-4 grid-cols-6 h-[100vh]">
      <nav className="col-span-1 p-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="p-4 list-disc">
          {routes.map((route) => (
            <li key={route.id} className="text-md ms-4 mb-2">
              <Link to={route.url}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="layout-container col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
