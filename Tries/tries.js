// Tries are a type of search tree(not binary since it may have many edges/children). Tries are used to store strings
// by building prefixes with the edges between nodes. A trie is a type of search tree used to efficiently store a set 
// of strings for later retrieval. In the long run, we'll see that a path from root to any node in the trie will 
// represent a prefix of at least one string in the set. This is why tries are also known as prefix trees
// Unlike our other tree structures, we do not store values within the nodes of a trie. Instead we store values for 
// each edge that leaves a node. 
// A word recognized by the trie must begin at the root and end at a terminal node.
// Build it using OOP principles with a Node class and Trie class.

class Node {
  constructor() {
    this.isTerminal = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];

    // check to see if letter exists in an outgoing edge of root node, otherwise add it
    if (!(letter in root.children)) root.children[letter] = new Node();

    // if word has no more letters, set node as terminal node
    if (word.length === 1) {  
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (!word && root.isTerminal) {
      return true; 
    } else {
      return false;
    }
    
    let letter = word[0];
    if (!(letter in root.children[letter])) {
      return false
    } else {
      return this.search(word.slice(1), root.children[letter])
    }
  }
}