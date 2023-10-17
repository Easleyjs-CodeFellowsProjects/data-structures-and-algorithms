const { BinaryTree, BinarySearchTree } = require('./BinaryTree');

describe('BinaryTree and BinarySearchTree tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.insert(10);
    expect(binaryTree.root).not.toBeNull();
    expect(binaryTree.root.value).toBe(10);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    expect(binarySearchTree.root.value).toBe(10);
    expect(binarySearchTree.root.left.value).toBe(5);
    expect(binarySearchTree.root.right.value).toBe(15);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    const preOrderResult = binaryTree.getPreOrderResults();
    expect(preOrderResult).toEqual([10, 5, 15]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    const inOrderResult = binaryTree.getInOrderResults();
    expect(inOrderResult).toEqual([5, 10, 15]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    const postOrderResult = binaryTree.getPostOrderResults();
    expect(postOrderResult).toEqual([5, 15, 10]);
  });

  test('Returns true for the contains method, given an existing node value', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    expect(binarySearchTree.contains(15)).toBe(true);
  });

  test('Returns false for the contains method, given a non-existing node value', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);
    expect(binarySearchTree.contains(20)).toBe(false);
  });
});
