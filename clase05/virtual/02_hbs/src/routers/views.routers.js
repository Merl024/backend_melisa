import express from 'express';
const router = express.Router();

let food = [
    {name: 'Pizza', price: '10' },
    {name: 'Hamburguesa', price: '8' },
    {name: 'Pasta', price: '12' },
]

//APIs
router.get('/food', (req, res) => {
    let testUser = {
        name: 'John',
        lastNamed: 'Doe',
        role: 'Admin'
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'Admin',
        style: 'index.css',
        food
    })
})



export default router