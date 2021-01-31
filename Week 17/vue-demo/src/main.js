import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";

Vue.config.productionTip = true;

// new Vue({
//   el: "#app",
//   template: "<HelloWorld/>",
//   components: { HelloWorld }
// });
new Vue({
	el: "#app",
	render: (h) => h(HelloWorld),
});