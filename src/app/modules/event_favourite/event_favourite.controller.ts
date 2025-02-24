import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { event_favouriteService } from './event_favourite.service';

// Create Event Favourite
const createevent_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req?.user?.userId;
    req.body.userId = userId;
    const newFavourite = await event_favouriteService.createevent_favourite(
      req.body,
    );

    res.status(201).json({
      status: 'success',
      data: newFavourite,
    });
  },
);

// Get All Event Favourites
const getAllevent_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const favourites = await event_favouriteService.getAllevent_favourite(
      req.query,
    );
    res.status(200).json({
      status: 'success',
      data: favourites,
    });
  },
);

// Get Event Favourite by ID
const getevent_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const favourite = await event_favouriteService.getevent_favouriteById(
      id,
      req.query,
    );

    if (!favourite) {
      return res.status(404).json({
        status: 'fail',
        message: 'Favourite not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: favourite,
    });
  },
);

// Get Event Favourite by ID
const getMyevent_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.user?.userId;
    const favourite = await event_favouriteService.getMyevent_favouriteById(
      id,
      req.query,
    );

    if (!favourite) {
      return res.status(404).json({
        status: 'fail',
        message: 'Favourite not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: favourite,
    });
  },
);

// Update Event Favourite
const updateevent_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { eventId } = req.body;

    const updatedFavourite = await event_favouriteService.updateevent_favourite(
      id,
      eventId,
    );

    if (!updatedFavourite) {
      return res.status(404).json({
        status: 'fail',
        message: 'Favourite not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: updatedFavourite,
    });
  },
);

// Delete Event Favourite
const deleteevent_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedFavourite =
      await event_favouriteService.deleteevent_favourite(id);

    if (!deletedFavourite) {
      return res.status(404).json({
        status: 'fail',
        message: 'Favourite not found',
      });
    }

    res.status(204).json({
      status: 'success',
      message: 'Favourite deleted successfully',
    });
  },
);

export const event_favouriteController = {
  createevent_favourite,
  getAllevent_favourite,
  getevent_favouriteById,
  updateevent_favourite,
  deleteevent_favourite,
  getMyevent_favouriteById,
};
