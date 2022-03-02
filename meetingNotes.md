# Introduction

## Old -> ES6
* Slide 4: Refactored var to ES6 const 
* Slide 4: Moved the global variable inside the function as passed to the sorting method.
* Slide 5: Refactored an imperative loop to a declarative forEach 
* Slide 6: Refactored sorting function to a function expression 

---

* Slide 7: Further refactored to an arrow function 
## Renaming 
* Slide 9: In future would rename before refactoring 
* Slide 9: Renamed for better readability and functions are easier to understand.
## Extras
* Slide 11: Moved the 'name' sort out of the sortByAmountThenByName into the processTransactions function.

---

* Slide 12: Renamed sorting method from sortByAmountTheName to sortByAmount as moved name sort out and it now has a single responibility (Single Responsibility Principle).  Method names are usually verbs.
* Slide 12: Removed extraneous sorting conditions from sort function. 
* Slide 12: Decided to retain the separate method to ensure better readability and for future reuse purposes.
* Slide 13: Refactored to fewer lines of code to make more concise.
* Slide 13: Definition of constants on one line v readability - discussion here
* Slide 14: Refactored the validateTransactions function to be a guard clause in the first line of the processTransactions function and removed the unnecessary function.
* Slide 14: Removed comments to make the code more concise.
