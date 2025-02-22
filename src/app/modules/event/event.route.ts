import { Router } from 'express';
import { eventController } from './event.controller';

const router = Router();

router.post('/create-event', eventController.createevent);

router.patch('/update/:id', eventController.updateevent);

router.delete('/:id', eventController.deleteevent);

router.get('/:id', eventController.geteventById);
router.get('/', eventController.getAllevent);

export const eventRoutes = router;
