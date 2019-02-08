import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { notes } from './redux/notes.redux'
import { note } from './redux/note.redux'
export default combineReducers({
    user,
    notes,
    note
})
