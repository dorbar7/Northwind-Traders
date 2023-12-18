import express, { Request, Response, NextFunction } from "express";
import MessageModel from "../4-models/message-model";
import forumLogic from "../5-logic/forum-logic";

const router = express.Router();

router.get("/forum", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const messages = await forumLogic.getAllMessages();
        response.json(messages);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/forum", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const message = new MessageModel(request.body);
        const addedMessage = await forumLogic.addMessage(message);
        response.status(201).json(addedMessage);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;