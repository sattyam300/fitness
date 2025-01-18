import express from 'express';  // Use import syntax
import { getPlans } from '../controllers/planController.js';  // Import functions using ES Module syntax
import authMiddleware from '../middleware/authMiddleware.js';  // Assuming authMiddleware is also an ES module

const router = express.Router();

router.get('/', getPlans);  // Use the imported function

export default router;  // Use export default for exporting the router
