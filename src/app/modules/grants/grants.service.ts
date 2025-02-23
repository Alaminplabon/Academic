// grants.service.ts
import QueryBuilder from '../../builder/QueryBuilder';
import { Igrants } from './grants.interface';
import Grants from './grants.models';

const creategrants = async (grantData: Igrants) => {
  return await Grants.create(grantData);
};

const getAllgrants = async (query: Record<string, any>) => {
  const grantsModel = new QueryBuilder(Grants.find(), query)
    .search(['title', 'amount', 'status'])
    .filter()
    .paginate()
    .sort();

  const data: any = await grantsModel.modelQuery;
  const meta = await grantsModel.countTotal();

  return {
    data,
    meta,
  };
};

const getgrantsById = async (id: string, query: Record<string, any>) => {
  const grantsModel = new QueryBuilder(Grants.find({ _id: id }), query)
    .search(['title', 'amount', 'status'])
    .filter()
    .paginate()
    .sort();

  const data: any = await grantsModel.modelQuery;
  const meta = await grantsModel.countTotal();

  return {
    data,
    meta,
  };
};

const getMygrantsById = async (id: string, query: Record<string, any>) => {
  const grantsModel = new QueryBuilder(Grants.find({ userId: id }), query)
    .search(['title', 'amount', 'status'])
    .filter()
    .paginate()
    .sort();

  const data: any = await grantsModel.modelQuery;
  const meta = await grantsModel.countTotal();

  return {
    data,
    meta,
  };
};

const updategrants = async (id: string, grantData: Partial<Igrants>) => {
  return await Grants.findByIdAndUpdate(id, grantData, { new: true });
};

const deletegrants = async (id: string) => {
  return await Grants.findByIdAndDelete(id);
};

export const grantsService = {
  creategrants,
  getAllgrants,
  getgrantsById,
  updategrants,
  deletegrants,
  getMygrantsById,
};
