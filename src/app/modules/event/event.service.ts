import Event from './event.models';
import { Ievent } from './event.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createevent = async (eventData: Ievent) => {
  const newEvent = await Event.create(eventData);
  return newEvent;
};

const getAllevent = async (query: Record<string, any>) => {
  const eventModel = new QueryBuilder(Event.find(), query)
    .search(['name', 'location', 'date'])
    .filter()
    .paginate()
    .sort();

  const data: any = await eventModel.modelQuery;
  const meta = await eventModel.countTotal();

  return {
    data,
    meta,
  };
};

const geteventById = async (id: string, query: Record<string, any>) => {
  const eventModel = new QueryBuilder(Event.find({ _id: id }), query)
    .search(['name', 'location', 'date'])
    .filter()
    .paginate()
    .sort();

  const data: any = await eventModel.modelQuery;
  const meta = await eventModel.countTotal();
  return {
    data,
    meta,
  };
};

const getMyeventById = async (id: string, query: Record<string, any>) => {
  const eventModel = new QueryBuilder(Event.find({ userId: id }), query)
    .search(['name', 'location', 'date'])
    .filter()
    .paginate()
    .sort();

  const data: any = await eventModel.modelQuery;
  const meta = await eventModel.countTotal();
  return {
    data,
    meta,
  };
};

const updateevent = async (id: string, eventData: Partial<Ievent>) => {
  const updatedEvent = await Event.findByIdAndUpdate(id, eventData, {
    new: true,
  });
  return updatedEvent;
};

const deleteevent = async (id: string) => {
  const deletedEvent = await Event.findByIdAndDelete(id);
  return deletedEvent;
};

export const eventService = {
  createevent,
  getAllevent,
  geteventById,
  updateevent,
  deleteevent,
  getMyeventById,
};
