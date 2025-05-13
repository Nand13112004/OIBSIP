let tasks = [];

document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const task = {
    id: Date.now(),
    title,
    description,
    status: "pending",
    createdAt: new Date().toLocaleString(),
    completedAt: null
  };

  tasks.push(task);
  renderTasks();
  this.reset();
});

function renderTasks() {
  const pendingList = document.getElementById("pending-list");
  const completedList = document.getElementById("completed-list");
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <div>
        <strong>${task.title}</strong><br>${task.description}<br><small>Added: ${task.createdAt}</small>
        ${task.status === 'done' ? `<br><small>Completed: ${task.completedAt}</small>` : ''}
      </div>
      <div class="task-buttons">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
        ${task.status === 'pending' ? `<button onclick="completeTask(${task.id})">Complete</button>` : ''}
      </div>
    `;

    if (task.status === "pending") {
      pendingList.appendChild(li);
    } else {
      completedList.appendChild(li);
    }
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function completeTask(id) {
  const task = tasks.find(task => task.id === id);
  task.status = 'done';
  task.completedAt = new Date().toLocaleString();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(task => task.id === id);
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  deleteTask(id);
}
