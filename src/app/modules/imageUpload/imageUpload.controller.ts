import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ImageUploadService } from './imageUpload.service';

const createimageUpload = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  req.body.userId = userId;

  console.log('req.body-----------', req.body);
  console.log('req.files', req.files);

  const result = await ImageUploadService.createimageUpload(
    req.body,
    req.files,
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'ImageUpload created successfully',
    data: result,
  });
});
const getAllimageUpload = catchAsync(async (req: Request, res: Response) => {});
const getimageUploadById = catchAsync(
  async (req: Request, res: Response) => {},
);
const updateimageUpload = catchAsync(async (req: Request, res: Response) => {});
const deleteimageUpload = catchAsync(async (req: Request, res: Response) => {});

export const imageUploadController = {
  createimageUpload,
  getAllimageUpload,
  getimageUploadById,
  updateimageUpload,
  deleteimageUpload,
};
