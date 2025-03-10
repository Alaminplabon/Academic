import Event from './event.models';
import { Ievent } from './event.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { notificationServices } from '../notification/notification.service';
import { USER_ROLE } from '../user/user.constants';
import { modeType } from '../notification/notification.interface';

const createevent = async (eventData: Ievent) => {
  const newEvent = await Event.create(eventData);
  // await notificationServices.insertNotificationIntoDb({
  //   receiver: USER_ROLE.admin,
  //   message: 'Event Created successfully',
  //   description: `User ${eventData.userId} has successfully created an event titled "${eventData.title}".`,
  //   refference: newEvent._id,
  //   model_type: modeType.Event,
  // });
  return newEvent;
};

const getAllevent = async (query: Record<string, any>) => {
  const eventModel = new QueryBuilder(Event.find().populate('userId'), query)
    .search(['title'])
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
    .search(['title'])
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
    .search(['title'])
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

const getEventByUserId = async (userId: string, query: Record<string, any>) => {
  const eventModel = new QueryBuilder(Event.find({ userId }), query)
    .search(['title']) // Adjust search fields as needed
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


export const eventService = {
  createevent,
  getAllevent,
  geteventById,
  updateevent,
  deleteevent,
  getMyeventById,
  getEventByUserId,
};
