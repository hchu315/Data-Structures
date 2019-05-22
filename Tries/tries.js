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
    let letter = word[0];

    if (!(letter in root.children)) return false;

    if (word.length === 1) {
      if (root.children[letter].isTerminal) {
        return true;
      } else {
        return false;
      }
    }

    return this.search(word.slice(1), root.children[letter])
  }
}

// TIME COMPLEXITY
// Worst-case TC is O(m) where m is the length of the word. TC is not dependent on how many words stored in the trie because at most
// you are traversing from the root to a terminal node which is a path the same length of the word.

// SPACE COMPLEXITY
// Worst-case SC is O(m*n) where m is the length of a word and n is the number of words; it occurs when the words have no overlapping
// prefixes at all and you're essentially creating a new path for every word.

// OTHER NOTES
// Tries are best used for a dictionary purpose of storing words and need to efficiently look up a word. Compared to a hash-based data
// structure like Object or Set, where the worst-case TC is O(n) where n is the number of entries in the dictionary due to hash collisions