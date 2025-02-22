import { Router } from 'express';
import { grantsController } from './grants.controller';

const router = Router();

router.post('/create-grants', grantsController.creategrants);

router.patch('/update/:id', grantsController.updategrants);

router.delete('/:id', grantsController.deletegrants);

router.get('/:id', grantsController.getgrantsById);
router.get('/', grantsController.getAllgrants);

export const grantsRoutes = router;
