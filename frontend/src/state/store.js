import { createStore,combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'




const todoListReducer = (state={todos:[]},action)=>{
    switch(action.type){
        case "ADD_TODO":{
            return {
                todos:[...state.todos,action.payload]
            }
        }
        case "DELETE_TODO":{
            return {
                todos:state.todos.filter(todo=>todo.id!==action.payload)
            }
        }
        case "CHANGE_STATUS":{
            let newAr=[...state.todos]
            newAr[action.payload].checked=!newAr[action.payload].checked
            return{
                todos:newAr
            }
        }
        case "EDIT_TODO":{
            let newAr=[...state.todos]
            newAr[action.payload.id].title=action.payload.title
            newAr[action.payload.id].time=action.payload.time
            return{
                todos:newAr
            } 
        }
        case "CHANGE_PRIORITY_STATUS":{
            let newAr=[...state.todos]
            console.log(newAr[action.payload].prio)
            newAr[action.payload].priority=!newAr[action.payload].priority
            return{
                todos:newAr
            } 
        }
        default: return state
    }
}

const userSettingsReducer=(state={},action)=>{
    return state
}

const initialState={
    todoList:{
        todos:[{
        title:"TEST",
        time:'12:00',
        checked:false,
        priority:false,
        id:0
    }]}
}
const reducers=combineReducers({
    todoList:todoListReducer,
    userSettings:userSettingsReducer
})

const store=createStore(reducers,initialState,composeWithDevTools())

export default store