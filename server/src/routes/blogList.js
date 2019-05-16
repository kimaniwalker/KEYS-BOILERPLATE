import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {
    blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    blogs.getOne(id)
        .then(blogs => {
            res.json(blogs);
        })

})

router.post('/', (req, res) => {
    let blog = req.body;

    blogs.insert(blog)
        .then(id => {
            res.json(id);
        })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    blogs.delete(id)
        .then(blogs => {
            res.json(blogs);
        })

})

export default router;