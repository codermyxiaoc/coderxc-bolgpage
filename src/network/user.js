import { request } from './request'
import qs from 'qs'

export function register(data) {
    return request({ 
        method: 'POST',
        url: '/api/createuser',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data)
    })
}
export function namelogin(data) {
    return request({
        method: 'POST',
        url: '/api/namelogin',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data)
    })
}
export function userinfo(token) {
    return request({
        method: 'GET',
        url: '/my/userinfo',
        headers: { 
            'Authorization': token
        },
    })
}
export function updatepic(token,fromdata) {
    return request({
        method: 'POST',
        url: '/my/headpor',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': token,
        },
        data: fromdata
    })
}
export function updateinfo(token,data) {
    return request({
        method: 'POST',
        url: '/my/updateuser',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}
export function changepassword(token, data) {
    return request({
        method: 'POST',
        url: '/my/updatepwd',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}
export function unsubscribe(token, data) {
    return request({
        method: 'POST',
        url: '/my/Offuser',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}
