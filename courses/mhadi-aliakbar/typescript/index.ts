type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

interface IToDoList {
  addTask: (title: string) => Task;
  showTasks: () => Task[];
  filter: (fn: Function) => Task[];
  deleteTask: (id: number) => void;
  changeStatus: (id: number, status: boolean) => void;
  search: (text: string) => Task[];
}

class ToDoList implements IToDoList {
  protected tasks: Task[];
  private nextId: number;

  constructor() {
    this.tasks = [];
    this.nextId = 0;
  }

  addTask(title: string): Task {
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

  showTasks(): Task[] {
    // Reference Sharing Issues returning this.tasks so =>
    return [...this.tasks];
  }

  filter(fn: Function): Task[] {
    return fn([...this.tasks]);
  }

  deleteTask(id: number): void {
    const indexToBeDeleted = this.tasks.findIndex((task) => task.id === id);
    if (indexToBeDeleted >= 0) {
      this.tasks.splice(indexToBeDeleted, 1);
    } else {
      console.warn(`Task with id ${id} not found`);
    }
  }

  changeStatus(id: number, status: boolean): void {
    const taskToBeChanged = this.tasks.find((task) => task.id === id);
    if (taskToBeChanged) {
      taskToBeChanged.isDone = status;
    } else {
      // side Effect
      throw new Error(`Task with id ${id} not found`);
    }
  }
  search(text: string): Task[] {
    const filtered = [...this.tasks].filter((task) => {
      return task.title.toLowerCase().includes(text.toLowerCase());
    });
    return filtered as Task[];
  }
}

/**
 * Enjoy playing with code.
 * Adds a new task to the to-do list.
 *
 * @param title - The title of the task to add.
 * @returns The created Task object with id, title, and isDone = false status.
 *
 * @example
 * const task = myToDoList.addTask("Write unit tests");
 *
 * @author Amir Samimi, Rahnama Collage, 2025
 */

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
const filterDoneTasks = myToDoList.filter((tasks: Task[]) => {
  return tasks.filter((task) => task.isDone); // retriving tasks with Done Status
});
console.log("filter", filterDoneTasks);
