//list cua nhung node duoc lien ket voi nhau
//node cuoi cung luon luon tro toi null
//su dung de tao 1 linked list (insert va delete rat nhieu lan)
//trong 1 linked list luon luon co: node head, node tail(node cuoi tro toi null)
//cac loai linked list: single linked list, double linked list, circular linked list, uncircular linked list,...
//singly linked list -> 1 chieu chi biet node tiep theo
//doubly linked list -> moi node deu biet node truoc va node sau

//doubly linked list
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }

  showData() {
    console.log(this.data)
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    if (this.head) {
      this.head.prev = newNode
    }
    this.head = newNode
  }

  insertAtTail(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    newNode.prev = current
    current.next = newNode
  }
  size() {
    let count = 0
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }

  insertAtIndex(data, index) {
    if (index < 0 || index > this.size()) {
      console.log('invalid index')
    }
    const newNode = new Node(data)
    if (index === 0) {
      this.insertAtHead(data)
      return
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    newNode.prev = current
    newNode.next = current.next
    if (current.next) {
      current.next.prev = newNode
    }
    current.next = newNode
  }

  deleteAtHead() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
    if (this.head) {
      this.head.prev = null
    }
  }

  deleteAtTail() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null
      return
    }
    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
  }

  showList() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.size()) {
      console.log('invalid index')
    }
    if (index === 0) {
      this.deleteAtHead()
      return
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    if (current.next) {
      current.next = current.next.next
      if (current.next) {
        current.next.prev = current
      }
    }
  }
}

const dll = new DoublyLinkedList()
dll.insertAtHead(1)
dll.insertAtHead(2)
dll.insertAtHead(3)
dll.insertAtHead(4)

dll.insertAtIndex(11,2)


dll.showList()