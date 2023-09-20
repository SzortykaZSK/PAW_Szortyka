const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicjalizacja pustej listy projektów
const projects = [];

function showMenu() {
  console.log('Zarządzanie Zadaniami - Wybierz opcję:');
  console.log('1. Przeglądaj projekty');
  console.log('2. Dodaj projekt');
  console.log('3. Wybierz projekt');
  console.log('4. Wyjdź');
}

function displayProjects() {
  if (projects.length === 0) {
    console.log('Brak dostępnych projektów.');
  } else {
    console.log('Lista dostępnych projektów:');
    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.name}`);
    });
  }
  showMenu();
}

function addProject() {
  rl.question('Podaj nazwę nowego projektu: ', (name) => {
    projects.push({ name, tasks: [] });
    console.log(`Projekt "${name}" został dodany.`);
    showMenu();
  });
}

function selectProject() {
  displayProjects();
  rl.question('Wybierz numer projektu (lub "0" aby wrócić): ', (input) => {
    const projectIndex = parseInt(input) - 1;
    if (projectIndex === -1) {
      showMenu();
    } else if (!isNaN(projectIndex) && projectIndex >= 0 && projectIndex < projects.length) {
      const selectedProject = projects[projectIndex];
      projectMenu(selectedProject);
    } else {
      console.log('Nieprawidłowy numer projektu.');
      selectProject();
    }
  });
}

function projectMenu(project) {
  console.log(`Projekt: ${project.name}`);
  console.log('Zarządzanie Zadaniami - Wybierz opcję:');
  console.log('1. Przeglądaj zadania');
  console.log('2. Dodaj zadanie');
  console.log('3. Usuń zadanie');
  console.log('4. Wróć do listy projektów');

  rl.question('Wybierz opcję: ', (choice) => {
    switch (choice) {
      case '1':
        displayTasks(project);
        break;
      case '2':
        addTask(project);
        break;
      case '3':
        deleteTask(project);
        break;
      case '4':
        selectProject();
        break;
      default:
        console.log('Nieprawidłowy wybór. Wybierz liczbę od 1 do 4.');
        projectMenu(project);
        break;
    }
  });
}

function displayTasks(project) {
  if (project.tasks.length === 0) {
    console.log('Brak zadań w projekcie.');
  } else {
    console.log(`Zadania w projekcie "${project.name}":`);
    project.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  projectMenu(project);
}

function addTask(project) {
  rl.question('Dodaj nowe zadanie: ', (task) => {
    project.tasks.push(task);
    console.log(`Zadanie "${task}" zostało dodane.`);
    displayTasks(project);
  });
}

function deleteTask(project) {
  displayTasks(project);
  rl.question('Podaj numer zadania do usunięcia: ', (input) => {
    const taskIndex = parseInt(input) - 1;

    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < project.tasks.length) {
      const removedTask = project.tasks.splice(taskIndex, 1);
      console.log(`Zadanie "${removedTask[0]}" zostało usunięte.`);
    } else {
      console.log('Nieprawidłowy numer zadania.');
    }

    displayTasks(project);
  });
}

function saveProjectsToFile() {
  fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
  console.log('Projekty zostały zapisane do pliku projects.json.');
}

// Sprawdzanie, czy istnieje plik JSON z zapisanymi projektami
if (fs.existsSync('projects.json')) {
  const data = fs.readFileSync('projects.json', 'utf8');
  try {
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      projects.push(...parsedData);
    }
  } catch (err) {
    console.error('Błąd odczytu pliku projects.json:', err);
  }
}

console.log('Witaj w aplikacji Zarządzanie Zadaniami!');
showMenu();

rl.on('line', (input) => {
  switch (input) {
    case '1':
      displayProjects();
      break;
    case '2':
      addProject();
      break;
    case '3':
      selectProject();
      break;
    case '4':
      saveProjectsToFile();
      console.log('Do widzenia!');
      rl.close();
      break;
    default:
      console.log('Nieprawidłowy wybór. Wybierz liczbę od 1 do 4.');
      showMenu();
      break;
  }
});
