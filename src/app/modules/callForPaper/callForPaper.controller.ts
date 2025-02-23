// Controller

import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { callForPaperService } from './callForPaper.service';

// Create Call for Paper
const createcallForPaper = catchAsync(async (req: Request, res: Response) => {
  req.body.userId = req?.user?.userId;
  const newCallForPaper = await callForPaperService.createcallForPaper(
    req.body,
  );
  res.status(201).json({
    status: 'success',
    data: newCallForPaper,
  });
});

// Get All Call for Papers
const getAllcallForPaper = catchAsync(async (req: Request, res: Response) => {
  const callForPaperList = await callForPaperService.getAllcallForPaper(
    req.query,
  );
  res.status(200).json({
    status: 'success',
    data: callForPaperList,
  });
});

// Get Call for Paper by ID
const getcallForPaperById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const callForPaper = await callForPaperService.getcallForPaperById(
    id,
    req.query,
  );
  if (!callForPaper) {
    return res.status(404).json({
      status: 'fail',
      message: 'Call for Paper not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: callForPaper,
  });
});

// Get Call for Paper by ID
const getMycallForPaperById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.user?.userId;
    const callForPaper = await callForPaperService.getMycallForPaperById(
      id,
      req.query,
    );
    if (!callForPaper) {
      return res.status(404).json({
        status: 'fail',
        message: 'Call for Paper not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: callForPaper,
    });
  },
);

// Update Call for Paper
const updatecallForPaper = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedCallForPaper = await callForPaperService.updatecallForPaper(
    id,
    req.body,
  );
  if (!updatedCallForPaper) {
    return res.status(404).json({
      status: 'fail',
      message: 'Call for Paper not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: updatedCallForPaper,
  });
});

// Delete Call for Paper
const deletecallForPaper = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedCallForPaper = await callForPaperService.deletecallForPaper(id);
  if (!deletedCallForPaper) {
    return res.status(404).json({
      status: 'fail',
      message: 'Call for Paper not found',
    });
  }
  res.status(204).json({
    status: 'success',
    message: 'Call for Paper record deleted successfully',
  });
});

export const callForPaperController = {
  createcallForPaper,
  getAllcallForPaper,
  getcallForPaperById,
  updatecallForPaper,
  deletecallForPaper,
  getMycallForPaperById,
};
