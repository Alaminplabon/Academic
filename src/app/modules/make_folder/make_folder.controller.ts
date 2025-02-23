import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { make_folderService } from './make_folder.service';

// Create Make Folder
const createmake_folder = catchAsync(async (req: Request, res: Response) => {
  const { isPrivate } = req.body;
  const userId = req?.user?.userId; // Assuming user ID is retrieved from the token

  const newFolder = await make_folderService.createmake_folder(
    userId,
    isPrivate,
  );
  res.status(201).json({
    status: 'success',
    data: newFolder,
  });
});

// Get All Make Folders
const getAllmake_folder = catchAsync(async (req: Request, res: Response) => {
  const userId = req?.user?.userId; // Assuming user ID is retrieved from the token
  const folders = await make_folderService.getAllmake_folder(userId);
  res.status(200).json({
    status: 'success',
    data: folders,
  });
});

// Get Make Folder by ID
const getmake_folderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const folder = await make_folderService.getmake_folderById(id);
  if (!folder) {
    return res.status(404).json({
      status: 'fail',
      message: 'Folder not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: folder,
  });
});

// Update Make Folder
const updatemake_folder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { isPrivate } = req.body;
  const updatedFolder = await make_folderService.updatemake_folder(
    id,
    isPrivate,
  );
  if (!updatedFolder) {
    return res.status(404).json({
      status: 'fail',
      message: 'Folder not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: updatedFolder,
  });
});

// Delete Make Folder
const deletemake_folder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedFolder = await make_folderService.deletemake_folder(id);
  if (!deletedFolder) {
    return res.status(404).json({
      status: 'fail',
      message: 'Folder not found',
    });
  }
  res.status(204).json({
    status: 'success',
    message: 'Folder deleted successfully',
  });
});

const getMyFolders = catchAsync(async (req: Request, res: Response) => {
  const userId = req?.user?.userId; // Assuming user ID is retrieved from the token
  const folders = await make_folderService.getMyFolders(userId);
  res.status(200).json({
    status: 'success',
    data: folders,
  });
});

export const make_folderController = {
  createmake_folder,
  getAllmake_folder,
  getmake_folderById,
  updatemake_folder,
  deletemake_folder,
  getMyFolders,
};
