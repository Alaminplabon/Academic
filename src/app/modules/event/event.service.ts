import Event from './event.models';
import { Ievent } from './event.interface';

const createevent = async (eventData: Ievent) => {
  const newEvent = await Event.create(eventData);
  return newEvent;
};

const getAllevent = async () => {
  const events = await Event.find();
  return events;
};

const geteventById = async (id: string) => {
  const event = await Event.findById(id);
  return event;
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
};
