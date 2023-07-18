import { Router } from "express";
import { allBooks, createBook, deleteBook, searchBook, updateStock} from "../controllers/book.controller.js";

const router = Router()

router.post("/create", createBook)
router.post("/delete", deleteBook)
router.post("/searchBook", searchBook)
router.get("/allBooks", allBooks)
router.post("/updateStock", updateStock)

export default router;
