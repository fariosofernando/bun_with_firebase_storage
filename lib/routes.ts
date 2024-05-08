import { Router } from "express";
import multer from "multer";
import Controller from "./controller.ts";

export const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/product", upload.single("file"), new Controller().upload_image);
