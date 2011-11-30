// Author: rawlatv@google.com (Vishal Talwar)
//
// Defines the interface for a Trie.

#ifndef UNSCRABBLE_TRIE_H
#define UNSCRABBLE_TRIE_H

#include <string>

class Trie {
 public:
  // Constructs a empty Trie.
  Trie();
  // Inserts $word into this trie.
  void insert(std::string word);
  // Predicate that indicates this trie contains $word.
  bool contains(std::string word);
};

#endif  // UNSCRABBLE_TRIE_H
