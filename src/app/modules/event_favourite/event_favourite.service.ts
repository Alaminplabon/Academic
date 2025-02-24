import QueryBuilder from '../../builder/QueryBuilder';
import { Ievent_favourite } from './event_favourite.interface';
import EventFavourite from './event_favourite.models';

// Create Event Favourite
const createevent_favourite = async (payload: Ievent_favourite) => {
  // Check if the favourite entry already exists
  const existingEvent = await EventFavourite.findOne({
    userId: payload.userId,
    eventId: payload.eventId,
    favourite: true,
  });

  if (existingEvent) {
    throw new Error('Already added to your favourite list');
  }
  const newFavourite = await EventFavourite.create({
    ...payload,
  });
  return newFavourite;
};

// Get All Event Favourites
const getAllevent_favourite = async (query: Record<string, any>) => {
  const favouriteModel = new QueryBuilder(EventFavourite.find(), query)
    .search(['userId', 'eventId'])
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

// Get Event Favourite by ID
const getevent_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    EventFavourite.find({ _id: id }),
    query,
  )
    .search(['userId', 'eventId'])
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

// Get Event Favourite by ID
const getMyevent_favouriteById = async (
  id: string,
  query: Record<string, any>,
) => {
  const favouriteModel = new QueryBuilder(
    EventFavourite.find({ userId: id }),
    query,
  )
    .search(['userId', 'eventId'])
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

// Update Event Favourite
const updateevent_favourite = async (id: string, eventId: string) => {
  const updatedFavourite = await EventFavourite.findByIdAndUpdate(
    id,
    { eventId },
    { new: true },
  );
  return updatedFavourite;
};

// Delete Event Favourite
const deleteevent_favourite = async (id: string) => {
  const deletedFavourite = await EventFavourite.findByIdAndDelete(id);
  return deletedFavourite;
};

export const event_favouriteService = {
  createevent_favourite,
  getAllevent_favourite,
  getevent_favouriteById,
  updateevent_favourite,
  deleteevent_favourite,
  getMyevent_favouriteById,
};
