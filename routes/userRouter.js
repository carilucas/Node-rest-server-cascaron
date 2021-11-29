const {Router} = require('express');
const { getUser, putUser, postUser, patchUser, deleteUser } = require('../controllers/userController');
const router = Router();

router.get('/', getUser);
router.post('/',postUser);
router.put('/:id', putUser );
router.patch('/', patchUser);
router.delete('/', deleteUser);

module.exports = router;