// seleccionar el elemento del formulario modal para crear nuevas tareas
const form = document.querySelector("#formNewTask");

form.addEventListener('submit', (event) => {

    // Evitamos que el navegador ejecute la acción predeterminada de este evento
    event.preventDefault();

    // Obtener el elemento formulario para crear tareas
    const formData = event.target;

    // Recopilamos la información para consumir la API
    const data = {
        title: formData.taskTitle.value,
        person: formData.responsibleTask.value,
        details: formData.taskDescription.value,
        state: 'TODO',
        deadline: Number(moment().add(formData.deadLineTask.value, 'days').format('X')),
        created: Number(moment().format("X"))
    }

    // Realizar una petición POST para insertar la información a través de la API
    axios.post(`${API_URL}/tasks`, data)
        .then((res) => {
            
            // Crear una nueva tarea
            createTask(res.data);

            // Reseteamos el formulario
            formData.reset();

        })
        .catch((err) => console.error(err));


});
