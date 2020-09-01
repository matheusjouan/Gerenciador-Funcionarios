import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.get('/:id', usersController.show);

usersRouter.put('/:id', usersController.update);

usersRouter.delete('/:id', usersController.delete);

usersRouter.get('/', usersController.index);

export default usersRouter;
