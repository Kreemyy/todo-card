# 📝 Todo Item Card (Frontend Wizards – Stage 0)

A clean, accessible, and testable Todo Task Card built with semantic HTML, CSS, and JavaScript.

## 🚀 Live Demo

[live demo](https://kreemyy.github.io/todo-card/)

## 🎯 Project Overview

This project implements a modern Todo Card component with a focus on:

- ✅ Testability (data-testid)
- ♿ Accessibility (ARIA + keyboard support)
- 📱 Responsiveness (mobile → desktop)
- 🧠 Clean UI logic (time remaining, status updates)

---

## ✨ Features

- Task title and description
- Priority indicator (Low / Medium / High)
- Status (Pending / Done)
- Due date with <time> element
- Dynamic time remaining:
  - Due in X days
  - Due tomorrow
  - Due in X hours/minutes
  - Overdue by X time
- Completion toggle (checkbox)
- Tags (e.g. work, urgent, design)
- Edit & Delete buttons (dummy actions)

---

## 🧪 Testability

All required elements include data-testid attributes for automated testing, such as:

- test-todo-card
- test-todo-title
- test-todo-description
- test-todo-priority
- test-todo-due-date
- test-todo-time-remaining
- test-todo-status
- test-todo-complete-toggle
- test-todo-tags
- test-todo-edit-button
- test-todo-delete-button

---

## ♿ Accessibility

- Semantic HTML (article, time, button, label)
- Keyboard accessible:
  - Tab navigation
  - Checkbox toggle (click + Enter support)
- aria-label used where necessary
- Visible focus states

---

## 📱 Responsiveness

- Mobile-first layout
- Full-width card on small screens
- Max-width container on larger screens
- Tags wrap properly without overflow

---

## ⚙️ How It Works

### Time Remaining Logic

- Uses the datetime attribute from the <time> element
- Calculates difference using Date
- Displays user-friendly messages:
  - Minutes, hours, days
  - Handles overdue cases

### Checkbox Behavior

- Toggles task completion
- Updates:
  - Title (strike-through)
  - Status (Pending → Done)

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

## 📌 Notes

- Edit/Delete buttons are placeholders
- Time updates every 60 seconds
- No external libraries used

---

## 🧑‍💻 Author

_Kareem_

---

## 📅 Deadline

16th April 2026
