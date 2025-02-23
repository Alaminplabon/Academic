import QueryBuilder from '../../builder/QueryBuilder';
import { Ijobpost_favourite } from './jobpost_favourite.interface';
import JobPostFavourite from './jobpost_favourite.models';

// Create Job Post Favourite
const createjobpost_favourite = async (userId: string, jobpostId: string) => {
  const newFavourite = await JobPostFavourite.create({
    userId,
    jobpostId,
  });
  return newFavourite;
};

// Get All Job Post Favourites
const getAlljobpost_favourite = async (query: Record<string, any>) => {
  const favouriteModel = new QueryBuilder(JobPostFavourite.find(), query)
    .search(['userId', 'jobpostId'])
    .filter()
    .paginate()
    .sort();

  const data: any = await favouriteModel.modelQuery;
  const meta = await favouriteModel.countTotal();

  return {
    data,
    meta,
  };
};

// Get Job Post Favourite by ID
const getjobpost_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    JobPostFavourite.find({ _id: id }),
    query,
  )
    .search(['userId', 'jobpostId'])
    .filter()
    .paginate()
    .sort();

  const data: any = await favouriteModel.modelQuery;
  const meta = await favouriteModel.countTotal();

  return {
    data,
    meta,
  };
};

const getMyjobpost_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    JobPostFavourite.find({ userId: id }),
    query,
  )
    .search(['userId', 'jobpostId'])
    .filter()
    .paginate()
    .sort();

  const data: any = await favouriteModel.modelQuery;
  const meta = await favouriteModel.countTotal();

  return {
    data,
    meta,
  };
};

// Update Job Post Favourite
const updatejobpost_favourite = async (id: string, jobpostId: string) => {
  const updatedFavourite = await JobPostFavourite.findByIdAndUpdate(
    id,
    { jobpostId },
    { new: true },
  );
  return updatedFavourite;
};

// Delete Job Post Favourite
const deletejobpost_favourite = async (id: string) => {
  const deletedFavourite = await JobPostFavourite.findByIdAndDelete(id);
  return deletedFavourite;
};

export const jobpost_favouriteService = {
  createjobpost_favourite,
  getAlljobpost_favourite,
  getjobpost_favouriteById,
  updatejobpost_favourite,
  deletejobpost_favourite,
  getMyjobpost_favouriteById,
};
