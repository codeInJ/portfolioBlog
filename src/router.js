import Vue from "vue";
import VueRouter from "vue-router";
import home from "./views/home";
import portfolio from "./views/portfolio";
import talk from "./views/talk";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: home},
        {path:"/home", component: home},
        {path:"/portfolio", component: portfolio},
        {path:"/talk", component: talk},
    ]
})

export default router;