import { Router } from 'express';
import { callForPaperController } from './callForPaper.controller';

const router = Router();

router.post('/create-callForPaper', callForPaperController.createcallForPaper);

router.patch('/update/:id', callForPaperController.updatecallForPaper);

router.delete('/:id', callForPaperController.deletecallForPaper);

router.get('/:id', callForPaperController.getcallForPaperById);
router.get('/', callForPaperController.getAllcallForPaper);

export const callForPaperRoutes = router;
