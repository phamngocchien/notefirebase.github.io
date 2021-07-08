import { noteData } from "./firebaseConnect";

var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editItem:{},
    isAdd: false
}
const note = (state = noteInitialState, action) => {
    switch (action.type) {
    case "ADD_DATA":
        noteData.push(action.getItem);
        break;
    case "CHANGE_EDIT_STATUS":
        return {...state, isEdit:!state.isEdit};
    case "CHANGE_ADD_STATUS":
        return {...state, isAdd:!state.isAdd};
    case "GET_EDIT_STATUS":
        return {...state, editItem: action.editObject};
    case "EDIT":
        //console.log("dữ liệu cần sửa mà store nhận dược là " + JSON.stringify(action.getItem))
        noteData.child(action.getItem.id).update({
            noteTitle: action.getItem.noteTitle,
            noteContent: action.getItem.noteContent,
        })
        return {...state, editItem:{}}
    case "DELETE_DATA":
        noteData.child(action.id).remove();
        return state;

    default:
        return state;
    }
}

var store = redux.createStore(note)
// store.subscribe(function(){
//     console.log(JSON.stringify(store.getState()))
// })
export default store;
