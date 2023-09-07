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
      newTask: {
        task: "",
        done: false,
      },
    };
  },
  methods: {
    deleteTodo(index) {
      this.toDoList.splice(index, 1);
    },
    add() {
      console.log(this.newTask);
    },
  },
}).mount("#app");
