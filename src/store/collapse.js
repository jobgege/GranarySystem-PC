import { defineStore } from "pinia";

//管理侧边栏的折叠状态
export const useCollapseStore = defineStore("Collapse", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  getters: {},
  actions: {
    collapse() {
      console.log(this.isCollapse);
      this.isCollapse = !this.isCollapse;
    },
  },
});
