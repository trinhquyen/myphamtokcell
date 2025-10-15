import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import productslist from "@/views/ListProducts.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Contact from "@/views/Contact.vue";
import ReturnPolicy from "@/views/ReturnPolicy.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/productslist/:id",
    name: "productslist",
    component: productslist,
  },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/returnPolicy", name: "ReturnPolicy", component: ReturnPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
