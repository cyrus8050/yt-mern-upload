import express from 'express';

import { getItems,createItem, readTodos } from '../controllers/items.js';
// import { createItem, getItems } from '../controllers/items';

const router = express.Router();
router.get('/',getItems)
// router.get('/',getItems);
router.post('/',createItem);

export default router;