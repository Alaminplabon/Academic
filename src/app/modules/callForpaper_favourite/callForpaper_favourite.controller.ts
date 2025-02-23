import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { callForpaper_favouriteService } from './callForpaper_favourite.service';

// Create Call for Paper Favourite
const createcallForpaper_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { callForPaperId } = req.body;
    const userId = req?.user?.userId;

    const newFavourite =
      await callForpaper_favouriteService.createcallForpaper_favourite(
        userId,
        callForPaperId,
      );

    res.status(201).json({
      status: 'success',
      data: newFavourite,
    });
  },
);

// Get All Call for Paper Favourites
const getAllcallForpaper_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const favourites =
      await callForpaper_favouriteService.getAllcallForpaper_favourite(
        req.query,
      );
    res.status(200).json({
      status: 'success',
      data: favourites,
    });
  },
);

// Get Call for Paper Favourite by ID
const getcallForpaper_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const favourite =
      await callForpaper_favouriteService.getcallForpaper_favouriteById(
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

const getMycallForpaper_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.user?.userId;
    const favourite =
      await callForpaper_favouriteService.getMycallForpaper_favouriteById(
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

// Update Call for Paper Favourite
const updatecallForpaper_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { callForPaperId } = req.body;

    const updatedFavourite =
      await callForpaper_favouriteService.updatecallForpaper_favourite(
        id,
        callForPaperId,
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

// Delete Call for Paper Favourite
const deletecallForpaper_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedFavourite =
      await callForpaper_favouriteService.deletecallForpaper_favourite(id);

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

export const callForpaper_favouriteController = {
  createcallForpaper_favourite,
  getAllcallForpaper_favourite,
  getcallForpaper_favouriteById,
  updatecallForpaper_favourite,
  deletecallForpaper_favourite,
  getMycallForpaper_favouriteById,
};
