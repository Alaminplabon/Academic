// Controller
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { jobPostService } from './jobPost.service';

const createjobPost = catchAsync(async (req: Request, res: Response) => {
  req.body.userId = req?.user?.userId;
  const jobPost = await jobPostService.createjobPost(req.body);
  res.status(201).json({ status: 'success', data: jobPost });
});

const getAlljobPost = catchAsync(async (req: Request, res: Response) => {
  const jobPosts = await jobPostService.getAlljobPost(req.query);
  res.status(200).json({ status: 'success', data: jobPosts });
});

const getjobPostById = catchAsync(async (req: Request, res: Response) => {
  const jobPost = await jobPostService.getjobPostById(req.params.id, req.query);
  if (!jobPost) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Job Post not found' });
  }
  res.status(200).json({ status: 'success', data: jobPost });
});

const getMyjobPostById = catchAsync(async (req: Request, res: Response) => {
  const id = req?.user?.userId;
  const jobPost = await jobPostService.getMyjobPostById(id, req.query);
  if (!jobPost) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Job Post not found' });
  }
  res.status(200).json({ status: 'success', data: jobPost });
});

const updatejobPost = catchAsync(async (req: Request, res: Response) => {
  const jobPost = await jobPostService.updatejobPost(req.params.id, req.body);
  if (!jobPost) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Job Post not found' });
  }
  res.status(200).json({ status: 'success', data: jobPost });
});

const deletejobPost = catchAsync(async (req: Request, res: Response) => {
  const jobPost = await jobPostService.deletejobPost(req.params.id);
  if (!jobPost) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Job Post not found' });
  }
  res
    .status(204)
    .json({ status: 'success', message: 'Job Post deleted successfully' });
});

export const jobPostController = {
  createjobPost,
  getAlljobPost,
  getjobPostById,
  updatejobPost,
  deletejobPost,
  getMyjobPostById,
};
