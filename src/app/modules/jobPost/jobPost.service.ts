// Service
import { IjobPost } from './jobPost.interface';
import JobPost from './jobPost.models';

const createjobPost = async (data: IjobPost) => {
  return await JobPost.create(data);
};

const getAlljobPost = async () => {
  return await JobPost.find();
};

const getjobPostById = async (id: string) => {
  return await JobPost.findById(id);
};

const updatejobPost = async (id: string, data: Partial<IjobPost>) => {
  return await JobPost.findByIdAndUpdate(id, data, { new: true });
};

const deletejobPost = async (id: string) => {
  return await JobPost.findByIdAndDelete(id);
};

export const jobPostService = {
  createjobPost,
  getAlljobPost,
  getjobPostById,
  updatejobPost,
  deletejobPost,
};
