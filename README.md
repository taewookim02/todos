# todos

## Requirements

- Use classes and objects for todos
- Use Javascript to generate DOM (SPA)
- Use webpack to bundle prod, dev versions (webpack merge)
- Separate application logic from DOM-related stuff
- Use webstorage api to store todos
  - Make sure to handle exceptions so that the app doesn't crash with missing data

## Todos:

3. fix project nav div click when overflowing
4. Add Scheduled nav item
   - TODAY
   - SCHEDULED
   - ALL
   - PRIORITY
5. click on main nav items should render the items matching.
6. fix project add (AppController.js:18 AppController init() called
   index.html:1 An invalid form control with name='projectName' is not focusable. <input type=​"text" id=​"projectName" name=​"projectName" required>​)
   ![alt text](image-1.png)
7. UIController // FIXME: e.target for main nav items !projectFormContainer.contains(e.
8. when should things rerender?

   - when user checks finished (main nav 4 items)
   - todos container rerender should be done with animation on 1 sec delay

9. confirm modal on project delete
10. drag drop
11. Add throttling for scroll event listenr

## Use case scenarios

- User should have a default project to which all of their todos are put
- User should be able to create new projects and choose which project their todos go into.
- User should be able to create new todos
- User should be able to view all projects
- User should be able to view all todos in each project (title and duedate, changing color for different priorities)
- User should be able to expand a single todo to see/edit its details
- User should be able to delete a todo

## Suggestions

- Make use of libraries from [npm](https://github.com/date-fns/date-fns)
