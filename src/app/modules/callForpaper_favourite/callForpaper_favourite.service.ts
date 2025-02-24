import QueryBuilder from '../../builder/QueryBuilder';
import { IcallForPaper_favourite } from './callForpaper_favourite.interface';
import CallForpaperFavourite from './callForpaper_favourite.models';

// Create Call for Paper Favourite
const createcallForpaper_favourite = async (
  payload: IcallForPaper_favourite,
) => {
  // Check if the favourite entry already exists
  const existingFavourite = await CallForpaperFavourite.findOne({
    userId: payload.userId,
    callForPaperId: payload.callForPaperId,
    favourite: true,
  });

  if (existingFavourite) {
    throw new Error('Already added to your favourite list');
  }
  const newFavourite = await CallForpaperFavourite.create({
    ...payload,
  });
  return newFavourite;
};

// Get All Call for Paper Favourites
const getAllcallForpaper_favourite = async (query: Record<string, any>) => {
  const favouriteModel = new QueryBuilder(CallForpaperFavourite.find(), query)
    .search(['userId', 'callForPaperId'])
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

// Get Call for Paper Favourite by ID
const getcallForpaper_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    CallForpaperFavourite.find({ _id: id }),
    query,
  )
    .search(['userId', 'callForPaperId'])
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

const getMycallForpaper_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    CallForpaperFavourite.find({ userId: id }),
    query,
  )
    .search(['userId', 'callForPaperId'])
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

// Update Call for Paper Favourite
const updatecallForpaper_favourite = async (
  id: string,
  callForPaperId: string,
) => {
  const updatedFavourite = await CallForpaperFavourite.findByIdAndUpdate(
    id,
    { callForPaperId },
    { new: true },
  );
  return updatedFavourite;
};

// Delete Call for Paper Favourite
const deletecallForpaper_favourite = async (id: string) => {
  const deletedFavourite = await CallForpaperFavourite.findByIdAndDelete(id);
  return deletedFavourite;
};

export const callForpaper_favouriteService = {
  createcallForpaper_favourite,
  getAllcallForpaper_favourite,
  getcallForpaper_favouriteById,
  updatecallForpaper_favourite,
  deletecallForpaper_favourite,
  getMycallForpaper_favouriteById,
};
