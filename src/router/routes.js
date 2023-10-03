const routes = [
  {
    path: "/",
    component: () => import("@/layouts/mainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

export default routes;
