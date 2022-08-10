import { GET_USER, GET_LOGINSTATE,GET_ARTICLE ,GET_COMMENT} from './mutation-Type'

export default {
    [GET_USER](state,user) {
        state.user = user
    },
    [GET_LOGINSTATE](state,loginstate) {
        state.loginstate = loginstate
    },
    [GET_ARTICLE](state, article) {
        state.article = article
    },
    [GET_COMMENT](state,comment) {
        state.comment = comment
    }
}
