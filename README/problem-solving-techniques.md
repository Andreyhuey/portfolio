# Problem-Solving Techniques

## Backtracking

Backtracking is a problem-solving technique used to explore all possible solutions to a problem by building a solution incrementally. If a partial solution is invalid or doesn't lead to a valid solution, it "backs up" and tries a different path.

Problems involving combinations, permutations, or paths, where constraints must be satisfied.

- Broader Applications of Backtracking
  Backtracking is a versatile technique used for solving many problems, such as:

Combinatorics: Generating permutations, combinations, or subsets.
Sudoku Solvers: Trying all possible placements until the puzzle is solved.
Maze Solvers: Exploring paths in a grid until you reach the destination.
N-Queens Problem: Placing queens on a chessboard such that no two queens attack each other.
String Problems: Like this one—generating valid parentheses!

## Divide and conquer

Divide and conquer is a general algorithm design paradigm where a problem is divided into smaller subproblems, each of which is solved independently, and their solutions are combined to solve the original problem.

Examples: Merge sort : complexity of (O (n log n)), quicksort, binary search.

## Dynamic Programming (DP)

Dynamic Programming is a technique used to solve problems by breaking them down into overlapping subproblems and solving each subproblem just once, storing the result for future use (memoization).

## The Sliding Window Technique

The Sliding Window technique is an optimization method used to efficiently solve problems involving contiguous subarrays or substrings. Instead of recomputing values for every possible subarray, the window slides across the input while maintaining necessary information dynamically.

## Recursion Technique

Recursion is a technique where a function calls itself to solve a problem. It breaks a problem into smaller subproblems until reaching a base case.
