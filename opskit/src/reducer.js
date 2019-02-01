import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { note } from './redux/note.redux'
export default combineReducers({
    user,
    note
})
