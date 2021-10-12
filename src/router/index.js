import Vue from "vue";
import Router from "vue-router";
import Policyinfo from "@/components/Policyinfo.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Policyinfo",
      component: Policyinfo,
    },
  ],
});

export default router;
