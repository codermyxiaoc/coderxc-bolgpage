import { GET_USER, GET_LOGINSTATE,GET_ARTICLE,GET_COMMENT} from './mutation-Type'
import { inpreq } from 'network/article'
import { userinfo } from 'network/user'
import { inpcom } from 'network/article'
export default {
    getuser({commit},user) {
        commit(GET_USER,user)
    },
    getloginstate({commit},loginstate){
        commit(GET_LOGINSTATE,loginstate)
    },
    getarticle({ commit }) {
        inpreq().then(res => {
            commit(GET_ARTICLE, res.data.message)
        })
    },
    userreq({commit}){
        const storage = window.localStorage
        if (!storage.getItem('user')) {
            commit(GET_USER,{})
        }
        if (storage.getItem('user')) {
            userinfo(storage.getItem('user')).then(res => {
                commit(GET_USER, res.data.message)
            })
        }
    },
    getcommemt({ commit }, comment_id) {
        inpcom({
            comment_id: comment_id
        }).then(res => {
            commit(GET_COMMENT,res.data.message)
        })
    }
}