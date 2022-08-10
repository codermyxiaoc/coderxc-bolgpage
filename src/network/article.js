import { request } from './request'
import qs from 'qs'

export function inpreq() {
    return request({
        method: 'GET',
        url: '/api/inpreq',
    })
}
export function addart(token,data) {
    return request({
        method: 'POST',
        url: '/art/addart',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}
export function delart(token, data) {
    return request({
        method: 'POST',
        url: '/art/detart',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}

export function inpcom(data) {
    return request({
        method: 'POST',
        url: '/api/inpcom',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data)
    })
}
export function addcom(token,data) {
    return request({
        method: 'POST',
        url: '/art/addcom',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}
export function delcom(token,data) {
    return request({
        method: 'POST',
        url: '/art/detcom',
        headers: {
            'Authorization': token
        },
        data: qs.stringify(data)
    })
}

