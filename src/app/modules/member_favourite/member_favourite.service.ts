import QueryBuilder from '../../builder/QueryBuilder';
import { Imember_favourite } from './member_favourite.interface';
import MemberFavourite from './member_favourite.models';

// Create Member Favourite
const createmember_favourite = async (userId: string, memberId: string) => {
  const newFavourite = await MemberFavourite.create({
    userId,
    memberId,
  });
  return newFavourite;
};

// Get All Member Favourites
const getAllmember_favourite = async (query: Record<string, any>) => {
  const favouriteModel = new QueryBuilder(MemberFavourite.find(), query)
    .search(['userId', 'memberId'])
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

// Get Member Favourite by ID
const getmember_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    MemberFavourite.find({ _id: id }),
    query,
  )
    .search(['userId', 'memberId'])
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

const getMymember_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    MemberFavourite.find({ userId: id }),
    query,
  )
    .search(['userId', 'memberId'])
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

// Update Member Favourite
const updatemember_favourite = async (id: string, memberId: string) => {
  const updatedFavourite = await MemberFavourite.findByIdAndUpdate(
    id,
    { memberId },
    { new: true },
  );
  return updatedFavourite;
};

// Delete Member Favourite
const deletemember_favourite = async (id: string) => {
  const deletedFavourite = await MemberFavourite.findByIdAndDelete(id);
  return deletedFavourite;
};

export const member_favouriteService = {
  createmember_favourite,
  getAllmember_favourite,
  getmember_favouriteById,
  updatemember_favourite,
  deletemember_favourite,
  getMymember_favouriteById,
};
