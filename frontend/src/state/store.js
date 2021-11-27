import { createStore,combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'




const todoListReducer = (state={},action)=>{
    switch(action.type){
        case "ADD_TODO":{
            return {
                todos:[...state.todos,action.payload],
                idCounter:state.idCounter+1
            }
        }
        case "DELETE_TODO":{
            return {
                ...state,todos:state.todos.filter(todo=>todo.id!==action.payload)
            }
        }
        case "CHANGE_STATUS":{
            let newAr=[...state.todos]
            newAr[action.payload].checked=!newAr[action.payload].checked
            return{
                ...state,todos:newAr
            }
        }
        case "EDIT_TODO":{
            let newAr=[...state.todos]
            newAr[action.payload.id].title=action.payload.title
            newAr[action.payload.id].time=action.payload.time
            return{
                ...state,todos:newAr
            } 
        }
        case "CHANGE_PRIORITY_STATUS":{
            let newAr=[...state.todos]
            console.log(newAr[action.payload].prio)
            newAr[action.payload].priority=!newAr[action.payload].priority
            return{
                ...state,todos:newAr
            } 
        }
        default: return state
    }
}

const userSettingsReducer=(state={},action)=>{
    return state
}
const appStateReducer=(state={},action)=>{
    switch(action.type){
        case "CHANGE_TAB":
            return{...state,currentTab:action.payload}
        default: return state
    }
}

const initialState={
    todoList:{
        todos:localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[],
    idCounter:localStorage.getItem('idCounter')?localStorage.getItem('idCounter'):0
},
    userSettings:{},
    appState:{
        currentTab:'1'
    }
}
const reducers=combineReducers({
    todoList:todoListReducer,
    userSettings:userSettingsReducer,
    appState:appStateReducer
})

const store=createStore(reducers,initialState,composeWithDevTools())

export default store