import { defineStore } from 'pinia';

export const useBaseStore = defineStore('base', {
  state: () => ({
    msg: '',
  }),
  actions: {
    updateMsg(msg) {
      this.msg = msg;
    },
  },
});
