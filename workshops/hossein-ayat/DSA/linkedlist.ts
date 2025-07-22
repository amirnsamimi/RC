
class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  private head: ListNode | null;

  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value: number) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print(): void {
    let current = this.head;
    const values:number[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
