class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }

}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addRoot(node) {
    this.root = node;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  preOrderTraversalNode(node, resultArray) {
    if (node !== null) {
      resultArray.push(node.value);
      this.preOrderTraversalNode(node.left, resultArray);
      this.preOrderTraversalNode(node.right, resultArray);
    }
  }

  getPreOrderResults() {
    const result = [];
    this.preOrderTraversalNode(this.root, result);
    return result;
  }

  /*
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

const preOrderResult = binaryTree.preOrderTraversal();
console.log(preOrderResult); // Should output [10, 5, 3, 7, 15]
  */
  inOrderTraversalNode(node, resultArray) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, resultArray);
      resultArray.push(node.value);
      this.inOrderTraversalNode(node.right, resultArray);
    }
  }

  getInOrderResults() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  postOrderTraversalNode(node, resultArray) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, resultArray);
      this.postOrderTraversalNode(node.right, resultArray);
      resultArray.push(node.value);
    }
  }

  getPostOrderResults() {
    const result = [];
    this.postOrderTraversalNode(this.root, result);
    return result;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    this.root = this.addNode(this.root, value);
  }

  addNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.addNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.addNode(node.right, value);
    }

    return node;
  }

  contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }
}

module.exports = {
  BinarySearchTree,
  BinaryTree,
};
