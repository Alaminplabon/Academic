import { Router } from 'express';
import { jobPostController } from './jobPost.controller';

const router = Router();

router.post('/create-jobPost', jobPostController.createjobPost);

router.patch('/update/:id', jobPostController.updatejobPost);

router.delete('/:id', jobPostController.deletejobPost);

router.get('/:id', jobPostController.getjobPostById);
router.get('/', jobPostController.getAlljobPost);

export const jobPostRoutes = router;
