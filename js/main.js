console.log("ok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "to-do List",
    };
  },
}).mount("#app");
