console.log("ok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "to-do List",

      toDoList: [
        {
          task: "task 1",
          done: false,
        },
        {
          task: "task 2",
          done: false,
        },
        {
          task: "task 3",
          done: false,
        },
      ],
    };
  },
}).mount("#app");
