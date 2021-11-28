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
            const existingItem=state.todos.find(todo=>todo.id===action.payload)
            if(existingItem){
                const newItem={...existingItem,checked:!existingItem.checked}
                let newAr=[...state.todos]
                newAr.splice(state.todos.indexOf(existingItem),1,newItem)
                return{
                ...state,todos:newAr
                } 
            }else return state
        }
        case "EDIT_TODO":{
            const existingItem=state.todos.find(todo=>todo.id===action.payload.id)
            if(existingItem){
                const newItem={...existingItem,title:action.payload.title,time:action.payload.time}
                let newAr=[...state.todos]
                newAr.splice(state.todos.indexOf(existingItem),1,newItem)
                return{
                ...state,todos:newAr
                } 
            }else return state
        }
        case "CHANGE_PRIORITY_STATUS":{
            const existingItem=state.todos.find(todo=>todo.id===action.payload)
            if(existingItem){
                const newItem={...existingItem,priority:!existingItem.priority}
                let newAr=[...state.todos]
                newAr.splice(state.todos.indexOf(existingItem),1,newItem)
                return{
                ...state,todos:newAr
                } 
            }else return state
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
    idCounter:Number(localStorage.getItem('idCounter'))?Number(localStorage.getItem('idCounter')):0
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