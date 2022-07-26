const API_URL =
  "https://my-json-server.typicode.com/alejolopez-co/M3U2TrelloAppAlejandroLopez";

// Petición get a la Fake API
axios
    .get(`${API_URL}/tasks`)
    .then((res) => showAllTasks(res.data))
    .catch((err) => console.error(err));

// Filtro de todas las tareas recibidas por la la API y mapeo de las mismas
const showAllTasks = (data) => {
  data.map((task) => createTask(task));
}

// Crear tareas dinamicamente
const createTask = (task) => {
  
  // Creamos la estructura de las tarjetas desde el JS
  let newTask = document.createElement("article");

  // Crear el contenedor de la tarea
  let taskContainer = document.createElement("div");
  // Establecer el tamaño máximo del contenedor
  taskContainer.style.maxWidth = "18rem;";
  // Definir la propiedad clase del contenedor de la tarjeta
  taskContainer.className = "card border-info mb-3";

  // Crear el Header de la tarea
  let taskTitle = document.createElement("div");
  // Adicionar la propiedad clase del Header
  taskTitle.classList.add("card-header");
  // Establecer el titulo de la tarea en el HTML 
  taskTitle.innerHTML = task.title;

  // Crear el Body de la tarea
  let newBody = document.createElement("div");
  // Adicionar la propiedad clase del elemento
  newBody.classList.add("card-body");

  // Crear el responsable de la tarea
  let taskResponsible = document.createElement("h5");
  // Adicionar la propiedad clase del elemento
  taskResponsible.classList.add("card-title");
  // Establecer los datos del responsable en el HTML del elemento
  taskResponsible.innerHTML = task.person;

  // Crear los detalles de la tarea
  let taskDetails = document.createElement("p");
  // Adicionar la propiedad clase del elemento
  taskDetails.classList.add("card-text");
  // Establecer los detalles de la tarea en el HTML del elemento
  taskDetails.innerHTML = task.details; 

  // Crear el plazo de la tarea
  let taskDeadline = document.createElement("p");
  // Adicionar la propiedad clase del elemento
  taskDeadline.classList.add("card-text");
  // Establecer el plazo de la tarea en el HTML del elemento
  taskDeadline.innerHTML = `Plazo: <small class="text-muted">${dateFormat(task.deadline)}</small>`;
  
  // Crear la fecha de creación de la tarea
  let taskCreated = document.createElement("p");
  // Adicionar la propiedad clase del elemento
  taskCreated.classList.add("card-text");
  // Establecer la fecha de creación de la tarea en el HTML del elemento
  taskCreated.innerHTML = `Creación: <small class="text-muted">${dateFormat(task.created)}</small>`;

  // Adicionar a cada Body los elementos hijos
  newBody.appendChild(taskResponsible);
  newBody.appendChild(taskDetails);
  newBody.appendChild(taskDeadline);
  newBody.appendChild(taskCreated);

  // Adicionar a cada contenedor de tareas los elementos hijos
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(newBody);

  // Adicionar a cada nueva tarea los elementos hijos
  newTask.appendChild(taskContainer);

  // Obtener el elemento de las columnas HMTL a traves del id
  let columnToDo = document.querySelector("#todoTasks");
  let columnWorking = document.querySelector("#workingTasks");
  let columnDone = document.querySelector("#doneTasks");

  // 
  switch (task.state) {
    case "TODO":
      columnToDo.appendChild(newTask);
      break;
    case "WORKING":
      columnWorking.appendChild(newTask);
      break;
    case "DONE":
      columnDone.appendChild(newTask);
      break;
    default:
      break;
  }


}