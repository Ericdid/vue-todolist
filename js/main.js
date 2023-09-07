// <!-- <div>prova1</div>
// <div class="pointer"><i class="fa-solid fa-x fa-2xl"></i></div>

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "to-do List",

      toDoList: [
        {
          task: "task 1",
          done: true,
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
