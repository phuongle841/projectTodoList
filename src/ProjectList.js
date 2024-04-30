class ProjectList {
  listOfProject;
  constructor() {
    this.listOfProject = [];
  }
  get List() {
    return this.listOfProject;
  }
}

const ProjectAdder = {
  addProject(project) {
    this.listOfProject.push(project);
  },
};

const ProjectRemover = {
  removeProject(removedProject) {
    let index = this.listOfProject.findIndex(
      (project) => project.title == removedProject
    );
    this.listOfProject.splice(index, 1);
  },
};

Object.assign(ProjectList.prototype, ProjectAdder);
Object.assign(ProjectList.prototype, ProjectRemover);

export { ProjectList };
