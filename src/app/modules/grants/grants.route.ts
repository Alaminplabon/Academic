import { Router } from 'express';
import { grantsController } from './grants.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';

const router = Router();

router.post('/create-grants', grantsController.creategrants);

router.patch('/update/:id', grantsController.updategrants);

router.delete('/:id', grantsController.deletegrants);
router.get(
  '/my-grants',
  auth(USER_ROLE.user),
  grantsController.getMygrantsById,
);
router.get('/:id', grantsController.getgrantsById);
router.get('/', grantsController.getAllgrants);

export const grantsRoutes = router;
