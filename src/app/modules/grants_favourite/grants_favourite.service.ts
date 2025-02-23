import QueryBuilder from '../../builder/QueryBuilder';
import { Igrants_favourite } from './grants_favourite.interface';
import GrantsFavourite from './grants_favourite.models';

// Create Grants Favourite
const creategrants_favourite = async (userId: string, grantsId: string) => {
  const newFavourite = await GrantsFavourite.create({
    userId,
    grantsId,
  });
  return newFavourite;
};

// Get All Grants Favourites
const getAllgrants_favourite = async (query: Record<string, any>) => {
  const favouriteModel = new QueryBuilder(GrantsFavourite.find(), query)
    .search(['userId', 'grantsId'])
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

// Get Grants Favourite by ID
const getgrants_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    GrantsFavourite.find({ _id: id }),
    query,
  )
    .search(['userId', 'grantsId'])
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

const getMygrants_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    GrantsFavourite.find({ userId: id }),
    query,
  )
    .search(['userId', 'grantsId'])
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

// Update Grants Favourite
const updategrants_favourite = async (id: string, grantsId: string) => {
  const updatedFavourite = await GrantsFavourite.findByIdAndUpdate(
    id,
    { grantsId },
    { new: true },
  );
  return updatedFavourite;
};

// Delete Grants Favourite
const deletegrants_favourite = async (id: string) => {
  const deletedFavourite = await GrantsFavourite.findByIdAndDelete(id);
  return deletedFavourite;
};

export const grants_favouriteService = {
  creategrants_favourite,
  getAllgrants_favourite,
  getgrants_favouriteById,
  updategrants_favourite,
  deletegrants_favourite,
  getMygrants_favouriteById,
};
