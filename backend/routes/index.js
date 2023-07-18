import { Router } from "express";
import  bookRoutes from "./book.route.js";

const router = Router()

router.use("/book", bookRoutes)

export default router;