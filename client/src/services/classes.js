import * as baseService from './base';

function all() {
    return baseService.get('/api/blogList');
}

function one(id) {
    return baseService.get(`/api/users/${id}`);
}

function insert(data) {
    return baseService.post('/api/blogList', data);
}

function update(id, data) {
    return baseService.put(`/api/blogList/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/blogList/${id}`);
}

export { all, one, insert, update, destroy };