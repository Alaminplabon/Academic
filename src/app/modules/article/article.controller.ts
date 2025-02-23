import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { articleService } from './article.service';

// Create Article
const createarticle = catchAsync(async (req: Request, res: Response) => {
  const userId = req?.user?.userId; // Extract userId from token
  const newArticle = await articleService.createarticle({
    ...req.body,
    userId,
  });
  res.status(201).json({
    status: 'success',
    data: newArticle,
  });
});

// Get All Articles
const getAllarticle = catchAsync(async (req: Request, res: Response) => {
  const articles = await articleService.getAllarticle();
  res.status(200).json({
    status: 'success',
    data: articles,
  });
});

// Get Article by ID
const getarticleById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const article = await articleService.getarticleById(id);
  if (!article) {
    return res.status(404).json({
      status: 'fail',
      message: 'Article not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: article,
  });
});

// Get Articles by Folder ID
const getArticlesByFolderId = catchAsync(
  async (req: Request, res: Response) => {
    const { folderId } = req.params;
    const articles = await articleService.getArticlesByFolderId(folderId);
    res.status(200).json({
      status: 'success',
      data: articles,
    });
  },
);

// Update Article
const updatearticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedArticle = await articleService.updatearticle(id, req.body);
  if (!updatedArticle) {
    return res.status(404).json({
      status: 'fail',
      message: 'Article not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: updatedArticle,
  });
});

// Delete Article
const deletearticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedArticle = await articleService.deletearticle(id);
  if (!deletedArticle) {
    return res.status(404).json({
      status: 'fail',
      message: 'Article not found',
    });
  }
  res.status(204).json({
    status: 'success',
    message: 'Article deleted successfully',
  });
});

export const articleController = {
  createarticle,
  getAllarticle,
  getarticleById,
  getArticlesByFolderId,
  updatearticle,
  deletearticle,
};
