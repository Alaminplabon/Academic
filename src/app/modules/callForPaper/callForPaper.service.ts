// Service

import { IcallForPaper } from './callForPaper.interface';
import CallForPaper from './callForPaper.models';

const createcallForPaper = async (data: IcallForPaper) => {
  const newCallForPaper = await CallForPaper.create(data);
  return newCallForPaper;
};

const getAllcallForPaper = async () => {
  const callForPaperList = await CallForPaper.find();
  return callForPaperList;
};

const getcallForPaperById = async (id: string) => {
  const callForPaper = await CallForPaper.findById(id);
  return callForPaper;
};

const updatecallForPaper = async (id: string, data: Partial<IcallForPaper>) => {
  const updatedCallForPaper = await CallForPaper.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCallForPaper;
};

const deletecallForPaper = async (id: string) => {
  const deletedCallForPaper = await CallForPaper.findByIdAndDelete(id);
  return deletedCallForPaper;
};

export const callForPaperService = {
  createcallForPaper,
  getAllcallForPaper,
  getcallForPaperById,
  updatecallForPaper,
  deletecallForPaper,
};
