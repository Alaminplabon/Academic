import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { member_favouriteService } from './member_favourite.service';

// Create Member Favourite
const createmember_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { memberId } = req.body;
    const userId = req?.user?.userId;

    const newFavourite = await member_favouriteService.createmember_favourite(
      userId,
      memberId,
    );

    res.status(201).json({
      status: 'success',
      data: newFavourite,
    });
  },
);

// Get All Member Favourites
const getAllmember_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const favourites = await member_favouriteService.getAllmember_favourite(
      req.query,
    );
    res.status(200).json({
      status: 'success',
      data: favourites,
    });
  },
);

// Get Member Favourite by ID
const getmember_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const favourite = await member_favouriteService.getmember_favouriteById(
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

// Get Member Favourite by ID
const getMymember_favouriteById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.user?.userId;
    const favourite = await member_favouriteService.getMymember_favouriteById(
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

// Update Member Favourite
const updatemember_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { memberId } = req.body;

    const updatedFavourite =
      await member_favouriteService.updatemember_favourite(id, memberId);

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

// Delete Member Favourite
const deletemember_favourite = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedFavourite =
      await member_favouriteService.deletemember_favourite(id);

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

export const member_favouriteController = {
  createmember_favourite,
  getAllmember_favourite,
  getmember_favouriteById,
  updatemember_favourite,
  deletemember_favourite,
  getMymember_favouriteById,
};
