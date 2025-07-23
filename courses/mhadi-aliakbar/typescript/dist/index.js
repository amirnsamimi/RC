"use strict";
class ToDoList {
    constructor() {
        this.tasks = [];
        this.nextId = 0;
    }
    addTask(title) {
        const { id, isDone } = {
            id: this.nextId,
            isDone: false,
        };
        // side Effect
        this.tasks.unshift({
            id,
            title,
            isDone,
        });
        this.nextId += 1;
        return {
            id,
            title,
            isDone,
        };
    }
    showTasks() {
        // Reference Sharing Issues returning this.tasks so =>
        return [...this.tasks];
    }
    filter(fn) {
        return fn([...this.tasks]);
    }
    deleteTask(id) {
        const indexToBeDeleted = this.tasks.findIndex((task) => task.id === id);
        if (indexToBeDeleted >= 0) {
            this.tasks.splice(indexToBeDeleted, 1);
        }
        else {
            console.warn(`Task with id ${id} not found`);
        }
    }
    changeStatus(id, status) {
        const taskToBeChanged = this.tasks.find((task) => task.id === id);
        if (taskToBeChanged) {
            taskToBeChanged.isDone = status;
        }
        else {
            // side Effect
            throw new Error(`Task with id ${id} not found`);
        }
    }
    search(text) {
        const filtered = [...this.tasks].filter((task) => {
            return task.title.toLowerCase().includes(text.toLowerCase());
        });
        return filtered;
    }
}
const myToDoList = new ToDoList();
myToDoList.addTask("Finish Course Videos");
console.log("show after first task", myToDoList.showTasks());
myToDoList.addTask("Handle Add Side Effect");
console.log("show after second task", myToDoList.showTasks());
myToDoList.deleteTask(0);
console.log("show after deletation", myToDoList.showTasks());
myToDoList.changeStatus(1, true);
console.log("show after status changed", myToDoList.showTasks());
console.log("search", myToDoList.search("Add"));
const filterDoneTasks = myToDoList.filter((tasks) => {
    return tasks.filter((task) => task.isDone); // retriving tasks with Done Status
});
console.log("filter", filterDoneTasks);
