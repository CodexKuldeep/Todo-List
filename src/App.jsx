import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSeleted";
import SelectedProject from "./components/SelectedProjects";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
function App() {

  const [projects,setProjects] = useState({
    selectedProjectId: undefined,
    projects: [] ,
    tasks:[],
  });

  function handleAddTask(text){
    setProjects(prev => {
      const taskId = Math.random()
      const newTask = {
        text:text,
        projectId: prev.selectedProjectId,
        id: taskId
      }

      return {
        ...prev,
       // selectedProjectId: undefined,
        tasks: [newTask,...prev.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjects(prev => {
      return {
        ...prev,
        tasks:prev.tasks.filter(
          (task) => task.id !== id
        )
      }
    })
  }



  function handleStartAddproject(){
    setProjects(prev => {
      return {
        ...prev,
        selectedProjectId:null
      }
    })
  }

  function handleCancel(){
    setProjects(prev => {
      return {
        ...prev,
        selectedProjectId:undefined
      }
    })
  }

  function handleSelectProject(id){
    setProjects(prev => {
      return {
        ...prev,
        selectedProjectId:id
      }
    })
  }

  function handleDeleteProject(){
    setProjects(prev => {
      return {
        ...prev,
        selectedProjectId:undefined,
        projects:prev.projects.filter(
          (project) => project.id !== projects.selectedProjectId
        )
      }
    })
  }


  function handleSave(projectdata){
    setProjects(prev => {
      const newProject = {
        ...projectdata,
        id: Math.random()
      }

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects,newProject]
      }
    })

  }

  console.log(projects)

  const selectedProject = projects.projects.find(project=> project.id===projects.selectedProjectId);

  let content= <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projects.tasks}/>
  if(projects.selectedProjectId===undefined)
  {
    content=<NoProjectSelected onSelectAdd={handleStartAddproject}/>
  }else if(projects.selectedProjectId===null){
    content= <NewProjects onAdd={handleSave} onCancel={handleCancel} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <Sidebar 
        onSelectAdd={handleStartAddproject} 
        projects={projects.projects} 
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
        />
      {content}
      <h2>Adding content as a person 2</h2>
    </main>
  );
}

export default App;
