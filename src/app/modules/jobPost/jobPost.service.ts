// Service
import QueryBuilder from '../../builder/QueryBuilder';
import { IjobPost } from './jobPost.interface';
import JobPost from './jobPost.models';

const createjobPost = async (data: IjobPost) => {
  return await JobPost.create(data);
};

const getAlljobPost = async (query: Record<string, any>) => {
  const jobPostModel = new QueryBuilder(JobPost.find(), query)
    .search(['title'])
    .filter()
    .paginate()
    .sort();

  const data: any = await jobPostModel.modelQuery;
  const meta = await jobPostModel.countTotal();

  return {
    data,
    meta,
  };
};

const getjobPostById = async (id: string, query: Record<string, any>) => {
  const jobPostModel = new QueryBuilder(JobPost.find({ _id: id }), query)
    .search(['title'])
    .filter()
    .paginate()
    .sort();

  const data: any = await jobPostModel.modelQuery;
  const meta = await jobPostModel.countTotal();

  return {
    data,
    meta,
  };
};

const getMyjobPostById = async (id: string, query: Record<string, any>) => {
  const jobPostModel = new QueryBuilder(JobPost.find({ userId: id }), query)
    .search(['title'])
    .filter()
    .paginate()
    .sort();

  const data: any = await jobPostModel.modelQuery;
  const meta = await jobPostModel.countTotal();

  return {
    data,
    meta,
  };
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
  getMyjobPostById,
};
