import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { notes } from './redux/notes.redux'
import { usernotes } from './redux/usernotes.redux'
import { userinfo } from './redux/userinfo.redux'
import { adminnotes } from './redux/adminnote.redux'
import { adminusers } from './redux/adminuser.redux'
import { admincomments } from './redux/admincomment.redux'
import { searchnotes } from './redux/search.redux'
import { note } from './redux/note.redux'
import { recommend } from './redux/recommend.redux'
export default combineReducers({
    user,
    notes,
    adminusers,
    searchnotes,
    admincomments,
    adminnotes,
    usernotes,
    userinfo,
    note,
    recommend
})
