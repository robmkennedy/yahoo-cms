- The generated article object is used in both the form and the preview panel.
- A typical state technique is to push state down as much as possible and then move up as necessary.
  - In this case, the state representing the article must be raised up to the common parent.
  - Therefore, when a single key is pressed in a field - both the entire form and preview panel are re-rendered (not good!)

* Ideally if you only edit the Long Title, then only the Long Title is re-rendered in the preview.
* A third party state management would be suited for this.
* Redux is a common state management system - newer "more lightweight" packages would be Zustand or Jotai.
* All support custom hooks, and splitting overall app state into smaller slices.
- **Redux Toolkit** is now used to avoid Redux boilerplate. 
  * It is established and opinionated, which makes it good for larger projects with multiple devs.
  * Includes RTK Query - which is based on react-query.
- **Zustand** is minimal and easy to set up.
  * For a large app, you will still need to split state into slices = nearly as much setup as Redux Toolkit.
  * Is not opinionated - larger teams need to coordinate well.
- **Jotai** is very simple to setup.
  * Based on "atomic" states - very small pieces of state.
  * Completely un-opinionated - states can be named/placed anywhere!
  * Could get messy quickly in large projects.

