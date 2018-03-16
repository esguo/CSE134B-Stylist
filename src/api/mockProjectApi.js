import delay from './delay';

export default class ProjectApi{

  static saveProject(project){
    project = Object.assign({}, project)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //do something....
        resolve(project)
      }, delay)
    })
  }


  static deleteProject(project){
    project = Object.assign({}, project)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //do something....
        resolve(project)
      }, delay)
    })
  }


  static editProject(project){
    project = Object.assign({}, project)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //do something....
        resolve(project)
      }, delay)
    })
  }

}
