import express, { Router, Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { BlogPost } from "../entity/BlogPost";

const router: Router = express.Router();
const blogRepository = AppDataSource.getRepository(BlogPost);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorName, authorPicture, title, content, postImage } = req.body;
    const blog = blogRepository.create({
      authorName,
      authorPicture,
      title,
      content,
      postImage,
    });
    await blogRepository.save(blog);
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, author, title, limit, page } = req.query;

    const queryBuilder = blogRepository.createQueryBuilder("blog");

    if (search) {
      queryBuilder.andWhere(
        "(blog.title ILIKE :search OR blog.content ILIKE :search)",
        { search: `%${search}%` }
      );
    }

    if (author) {
      queryBuilder.andWhere("blog.authorName ILIKE :author", {
        author: `%${author}%`,
      });
    }

    if (title) {
      queryBuilder.andWhere("blog.title ILIKE :title", { title: `%${title}%` });
    }

    // Pagination setup
    const take = limit ? Number(limit) : 10;
    const skip = page ? (Number(page) - 1) * take : 0;

    queryBuilder.skip(skip).take(take);

    const [blogPosts, total] = await queryBuilder.getManyAndCount();

    return successResponse(res, "Blog posts retrieved successfully", {
      posts: blogPosts,
      pagination: {
        total,
        limit: take,
        page: page ? Number(page) : 1,
        totalPages: Math.ceil(total / take),
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
