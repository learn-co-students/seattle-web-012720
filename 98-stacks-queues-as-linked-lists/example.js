class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack{
  constructor(){
    this.head = null
  }

  //inserts an element to the beginning ofr list
  push(data){
    const newNode = new Node(data)
    if(this.head == null){
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  //also return the lement at the head of the list
  pop(){
    const currentNode = this.head
    this.head = this.head.next
    return currentNode
  }

//returning the first number on top of the stack
  peek(){
    return this.head.data
  }

  head(){
    return this.head
  }
}

// testStack = new Stack()
// testStack.push(5)
// testStack.push(10)
// testStack.push(2)
// testStack.push(3)

// testStack.pop()
// testStack.pop()
// testStack.pop()
// console.log(testStack.head);

class Queue{
  constructor(){
    this.head= null
    this.end = null
  }

  // end of linkedl list
  // runtime? O(n)  
  enq(data){
    const newNode = new Node(data)
    if(this.head == null){
      this.head = newNode
      this.end = newNode
    } else {
      this.end.next = newNode
      this.end = newNode
    }
  }

  deq(){
    const current = this.head
    this.head = this.head.next
    return current
  }

  front(){
    return this.head.data
  }

  head(){
    return this.head
  }
}

sampleQ = new Queue()
sampleQ.enq(6)
sampleQ.enq(4)
sampleQ.enq(2)
sampleQ.enq(1)

console.log(sampleQ.front())
sampleQ.deq()
console.log(sampleQ.front())
sampleQ.deq()

console.log(sampleQ.head)
