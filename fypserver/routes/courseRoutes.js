import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseController.js";

const router = express.Router();

// Get All courses without Lectures
router.route("/courses").get(getAllCourses);

// Create new course - only admin
router.route("/createcourse").post(createCourse);

// ADd Lecture, Delete Course, Get Course Details

// Delete Lecture

export default router;
