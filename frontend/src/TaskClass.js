class Task{
    constructor(title,time){
        this.title=title
        this.time=time
        this.checked=false
        this.color='primary'
    }
    changeChecked(newst){
        return 'hello'
    }
    changeTitle(newTitle){
        this.title=newTitle
    }
}
export default Task