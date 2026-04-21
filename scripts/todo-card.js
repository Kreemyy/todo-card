let todo = {
  title: "Finish Foundations Course",
  description:
    "Complete the foundations course in The Odin Project along with all the exercises",
  priority: "High",
  status: "Pending",
  dueDate: "2026-04-15",
  timeRemaining: "",
  isExpanded: false,
  isEditing: false,
};

const checkbox = document.querySelector(".js-checkbox");
const title = document.querySelector(".js-title");
const description = document.querySelector(".js-description");
const priorityElem = document.querySelector(".js-priority");
const statusSelect = document.getElementById("statusSelect");
const statusIndicator = document.querySelector(".js-status-indicator");
const deleteElem = document.querySelector(".js-delete-btn");
const expandElem = document.querySelector(".expand-btn");
const editElem = document.querySelector(".js-edit-btn");
const dueTimeContainer = document.querySelector(".js-remaining-time");
const dueDateElem = document.querySelector(".js-due-date");
const remainingTimeElem = document.querySelector(".remaining-time");
const editForm = document.querySelector(".edit-form");
const viewElem = document.querySelector(".view-mode");
const inputDate = document.getElementById("edit-date");

function formatDueDate(dateString) {
  // if (!dateString) {
  //   return "";
  // }

  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const date = new Date(year, month - 1, day);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return "Due " + formattedDate;
}

function render() {
  title.textContent = todo.title;
  description.textContent = todo.description;
  priorityElem.textContent = todo.priority;
  statusSelect.value = todo.status;

  const dueDate = new Date(todo.dueDate);
  remainingTimeElem.textContent = getRemainingTime(dueDate);
  dueDateElem.setAttribute("datetime", todo.dueDate);

  dueDateElem.textContent = formatDueDate(todo.dueDate);
  checkbox.checked = todo.status === "Done";

  if (todo.status === "Done") {
    title.classList.add("done");
  } else {
    title.classList.remove("done");
  }

  updateStatusIndicator(todo.status);
  updatePriorityIndicator(todo.priority);

  if (todo.isExpanded) {
    description.classList.remove("collapsed");
    expandElem.innerHTML = `Collapse <i class="fa-solid fa-angle-up"></i>`;
    expandElem.setAttribute("aria-expanded", true);
  } else {
    description.classList.add("collapsed");
    expandElem.innerHTML = `Expand <i class="fa-solid fa-angle-down"></i>`;
    expandElem.setAttribute("aria-expanded", false);
  }

  editForm.style.display = todo.isEditing ? "block" : "none";
  viewElem.style.display = todo.isEditing ? "none" : "block";
}
render();

function setStatus(newStatus) {
  todo.status = newStatus;
  render();
}

function updatePriorityIndicator(priority) {
  const priorityIndicator = document.querySelector(".priority-indicator");
  priorityIndicator.classList.remove(
    "priority-high",
    "priority-medium",
    "priority-low",
  );

  if (priority === "High") {
    priorityIndicator.classList.add("priority-high");
  } else if (priority === "Medium") {
    priorityIndicator.classList.add("priority-medium");
  } else if (priority === "Low") {
    priorityIndicator.classList.add("priority-low");
  }
}

function updateStatusIndicator(status) {
  statusIndicator.classList.remove(
    "status-pending",
    "status-done",
    "status-in-progress",
  );

  if (status === "Pending") {
    statusIndicator.classList.add("status-pending");
  } else if (status === "In Progress") {
    statusIndicator.classList.add("status-in-progress");
  } else if (status === "Done") {
    statusIndicator.classList.add("status-done");
  }
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    setStatus("Done");
  } else {
    setStatus("Pending");
  }
});

expandElem.addEventListener("click", () => {
  todo.isExpanded = !todo.isExpanded;
  render();
});

statusSelect.addEventListener("change", (e) => {
  setStatus(e.target.value);
});

editElem.addEventListener("click", () => {
  const titleInput = document.getElementById("edit-title");
  const descInput = document.getElementById("edit-description");
  const priorityElem = document.getElementById("edit-priority");
  const dueDateElem = document.getElementById("edit-date");

  todo.isEditing = true;
  titleInput.value = todo.title;
  descInput.value = todo.description;
  priorityElem.value = todo.priority;
  dueDateElem.value = todo.dueDate;

  render();
});

const saveElem = document.querySelector(".save-btn");

saveElem.addEventListener("click", () => {
  const titleInput = document.getElementById("edit-title");
  const descInput = document.getElementById("edit-description");
  const priorityElem = document.getElementById("edit-priority");
  const dueDateElem = document.getElementById("edit-date");

  todo.title = titleInput.value;
  todo.description = descInput.value;
  todo.priority = priorityElem.value;
  todo.dueDate = dueDateElem.value;

  todo.isEditing = false;
  render();
});

const cancelElem = document.querySelector(".cancel-btn");

cancelElem.addEventListener("click", () => {
  todo.isEditing = false;
  render();
});

deleteElem.addEventListener("click", () => {
  alert("Delete clicked");
});

const dueTimeElem = document.querySelector(".js-due-date");
const dueDate = new Date(dueTimeElem.dateTime);

function getRemainingTime(dueDate) {
  const now = new Date();
  const difference = dueDate - now;

  dueTimeContainer.classList.remove("overdue");

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Calculate overdue first

  if (difference <= 0) {
    dueTimeContainer.classList.add("overdue");

    const minsOverDue = Math.abs(minutes);
    if (minsOverDue < 60) {
      if (minsOverDue >= 0 && minsOverDue < 1) {
        return `Overdue just now!`;
      }
      return `Overdue by ${minsOverDue} minute${minsOverDue === 1 ? "" : "s"}`;
    }

    const hoursOverdue = Math.abs(hours);
    if (hoursOverdue < 24) {
      if (hoursOverdue < 1) {
        return `Overdue by ${minsOverDue} minute${minsOverDue === 1 ? "" : "s"}`;
      }
      return `Overdue by ${hoursOverdue} hour${hoursOverdue === 1 ? "" : "s"}`;
    }

    const daysOverdue = Math.abs(days);

    return `Overdue by ${daysOverdue} day${daysOverdue === 1 ? "" : "s"}`;
  }

  // Calculate future dates

  if (minutes < 60) {
    if (minutes === 0) {
      return `Due now!`;
    }
    return `Due in ${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (hours < 24) {
    return `Due in ${hours} hour${hours === 1 ? "" : "s"}`;
  }

  if (days === 1) {
    return `Due tomorrow!`;
  }

  return `Due in ${days} days`;
}

remainingTimeElem.innerHTML = getRemainingTime(dueDate);
