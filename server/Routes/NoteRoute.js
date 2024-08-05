import express from 'express';
import { getNote, postNote } from "../Controller/NoteController.js";


const router = express.Router()


router.post('/', postNote);
// router.get('/:userId', getNote);
router.get('/', getNote);



export default router;