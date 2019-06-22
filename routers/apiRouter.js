import express from "express";
import {
    postRegisterView, postAddComment
} from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);


export default apiRouter;
