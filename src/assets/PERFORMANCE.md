The following updates would improve performance on the given assignment.

#### Image Loading

* The form allows setting the url for the image source.
* Once the src is set, the image itself will take time to load.
* The UI should always accommodate the **loading/error/success** state of all async functions.
   * In this case, ideally a custom `ImageLoader` component that listens to the `onload` event from the `<img>`.
   * This component will then either show the image, a spinner, or an error message depending on the result.

#### Debounce Input

* Typing quickly into fields will call multiple re-renders if the preview panel is to update in real time.
* To avoid this, it would be more efficient to debounce the input fields and only update state after a short timeout.
* This could be added to a `ValidateInput` component which would wrap the `TextInput` component.
* 200ms - 300ms would be a good starting point, and then perform user testing to ensure the UI does not feel unresponsive.



