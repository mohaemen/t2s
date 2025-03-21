import { z } from "zod";

export const jobPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description needs 20+ characters"),
  category: z.string().min(1, "Select a category"),
  budget: z.number().min(100, "Minimum budget is £100"),
});