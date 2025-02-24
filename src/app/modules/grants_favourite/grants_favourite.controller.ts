import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { grants_favouriteService } from './grants_favourite.service';

// Create Grants Favourite
const creategrants_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req?.user?.userId;
    req.body.userId = userId;
    const newFavourite = await grants_favouriteService.creategrants_favourite(
      req.body,
    );

    res.status(201).json({
      status: 'success',
      data: newFavourite,
    });
  },
);

// Get All Grants Favourites
const getAllgrants_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const favourites = await grants_favouriteService.getAllgrants_favourite(
      req.query,
    );
    res.status(200).json({
      status: 'success',
      data: favourites,
    });
  },
);

// Get Grants Favourite by ID
const getgrants_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const favourite = await grants_favouriteService.getgrants_favouriteById(
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

// Get Grants Favourite by ID
const getMygrants_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.user?.userId;
    const favourite = await grants_favouriteService.getMygrants_favouriteById(
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

// Update Grants Favourite
const updategrants_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { grantsId } = req.body;

    const updatedFavourite =
      await grants_favouriteService.updategrants_favourite(id, grantsId);

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

// Delete Grants Favourite
const deletegrants_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedFavourite =
      await grants_favouriteService.deletegrants_favourite(id);

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

export const grants_favouriteController = {
  creategrants_favourite,
  getAllgrants_favourite,
  getgrants_favouriteById,
  updategrants_favourite,
  deletegrants_favourite,
  getMygrants_favouriteById,
};
