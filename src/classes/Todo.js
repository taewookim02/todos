export class Todo {
  constructor(
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete
  ) {
    this.id = id;
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // orderby priority
    this.notes = notes;
    this.isComplete = isComplete;
    // this.checkList = [];
  }

  // edit title
  setTitle(title) {
    this.title = title;
  }

  // edit description
  setDescription(description) {
    this.description = description;
  }

  // edit dueDate
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  // edit priority
  setPriority(priority) {
    this.priority = priority;
  }

  // edit notes
  setNotes(notes) {
    this.notes = notes;
  }

  // edit isComplete
  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  // should i add checklist class?

  // add checklist item
  addChecklistItem(checklistItem) {
    this.checkList.push(checklistItem);
  }

  // edit checklist item

  // remove checklist item
}
