This is a simple client-side app designed to mimic a CMS for creating news articles.

The code is at [https://github.com/robmkennedy/yahoo-cms](https://github.com/robmkennedy/yahoo-cms)

The app is hosted at [https://robmkennedy.github.io/yahoo-cms](https://robmkennedy.github.io/yahoo-cms)

## Framework

- The app is built using React and the Vite framework.
- All components are built with vanilla Typescript and CSS modules.


## App Layout

The app provides two possible routes

#### Article Management `/article`
- Provides a form and preview to create a new article.

#### About This App `/about`
- Shows a panel containing this documentation for easier access.

## Design Considerations

There are different approaches to building the app based simply on the assignment given, and how it might be designed in a production environment.


#### Input Fields

* All the input fields are text inputs with validation functionality, therefore they can each be represented by a common component.
* To provide separation of UI and business logic, each component should be unaware of the validation it performs.
* Each component requires an optional prop to display the character count if necessary.
* In production code, there would usually be a common `ValidationInput` component which would wrap a common `TextInput` component.

#### Form Management

* For this assignment, it is enough for each input to maintain and display its own error state.
* Each input is a **controlled** input. As we already have the field states, we do not need to wrap them in a `<form>`.
* Typically, a form has a Submit button. This will need to be enabled/disabled based on field validation.
  * In this case, the field validation state needs to move out of each field and up into the form component.
* Maintaining separate state for each field can get complex for dynamic forms.
* We could use the vanilla `<form>` input functionality and keep the fields as **uncontrolled** inputs.
  * Now we use the submit function of the form itself.
  * We can still add a controlled input into the form if we want - the value will still be picked up by the submit function.
  * This makes validation difficult - react has no access to field values until submit is called.
* HTML has built-in validation attributes e.g. `required` `minlength` `maxlength` `type` `pattern` but these could limit validation.


* In general, it would be a good idea to either:
  * Use controlled inputs and validate on typing 
  * Use uncontrolled inputs and validate on clicking Submit 
* Form management can be implemented from scratch, but it is worth investigating possible third party libraries.


#### State Management

* The generated article object is used in both the form and the preview panel.
* A typical state technique is to push state down as much as possible and then move up as necessary.
  * In this case, the state representing the article must be raised up to the common parent.
  * Therefore, when a single key is pressed in a field - both the entire form and preview panel are rerendered (not good!)


* Ideally if you only edit the Long Title, then only the Long Title is rerendered in the preview.
* A third party state management would be suited for this.
* Redux is a common state management system - newer "more lightweight" packages would be Zustand or Jotai.
* All support custom hooks, and splitting overall app state into smaller slices.
* **Redux Toolkit** is now used to avoid Redux boilerplate. 
  * It is established and opinionated, which makes it good for larger projects with multiple devs.
  * Includes RTK Query - which is based on react-query.
* **Zustand** is minimal and easy to setup.
  * For a large app, you will still need to split state into slices = nearly as much setup as Redux Toolkit.
  * Is not opinionated - larger teams need to coordinate well.
* **Jotai** is very simple to setup.
  * Based on "atomic" states - very small pieces of state.
  * Completely un-opinionated - states can be named/placed anywhere!
  * Could get messy quickly in large projects.

#### Image Loading

* The form allows setting the url for the image sourc.
* This will take time to load.
* The UI should always accommodate the **loading/error/success** state of all async functions.
   * In this case, ideally a custom `ImageLoader` component that listens to the `onload` event from the `<img>`.
   * This component will then either show the image, a spinner, or an error message depending on the result.

#### Debounce Input

* Typing quickly into fields will call multiple rerenders if the preview panel is to update in real time.
* To avoid this, it would be more efficient to debounce the input fields and only update state after a short timeout.
* This could be added to a `ValidateInput` component which would wrap the `TextInput` component.

