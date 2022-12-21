import {createRouter, createWebHistory} from 'vue-router'
import itemView from "@/components/itemView";
import itemInfo from "@/components/itemInfo";
import PageNotFound from "@/components/Page404";


const routes = [
    {
        path: '/', component: itemView, name: 'Home', meta: {title: 'Home'}
    },
    {
        path: '/info/:id/:title', component: itemInfo, name: "itemInformation",
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];


export default createRouter({
    history: createWebHistory(),
    routes,

})
