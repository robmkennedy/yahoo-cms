There are different approaches to building the app based simply on the assignment given, and how it might be designed in a production environment.


#### Input Fields

* All the input fields are text inputs with validation functionality, therefore they can each be represented by a common component.
* To provide separation of UI and business logic, each component should be unaware of the validation it performs.
* Each component requires an optional prop to display the character count if necessary.
* In production code, there would usually be a common `ValidationInput` component which would wrap a common `TextInput` component.

#### Form Validation

- For this assignment, it is enough for each input to maintain and display its own error state. 
- Each input is a **controlled** input. As we already have the field states, we do not need to wrap them in a `<form>`.
- Typically, a form has a Submit button. This will need to be enabled/disabled based on field validation.
  - In this case, the field validation state needs to move out of each field and up into the form component.
- Maintaining separate state for each field can get complex for dynamic forms.
- We could use the vanilla `<form>` input functionality and keep the fields as **uncontrolled** inputs.
  - Now we use the submit function of the form itself.
  -We can still add a controlled input into the form if we want - the value will still be picked up by the submit function.
  -This makes validation difficult - react has no access to field values until submit is called.
- HTML has built-in validation attributes e.g. `required` `minlength` `maxlength` `type` `pattern` but these could limit validation.

* In general, it would be a good idea to either:
  * Use controlled inputs and validate on typing 
  * Use uncontrolled inputs and validate on clicking Submit 
* Form management can be implemented from scratch, but it is worth investigating possible third party libraries.

