// grants.service.ts
import { Igrants } from './grants.interface';
import Grants from './grants.models';

const creategrants = async (grantData: Igrants) => {
  return await Grants.create(grantData);
};

const getAllgrants = async () => {
  return await Grants.find();
};

const getgrantsById = async (id: string) => {
  return await Grants.findById(id);
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
};
