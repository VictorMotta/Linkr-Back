import { Router } from "express";

import { getTrendings, getByHashtag } from "../controllers/hashtags.controller";

const hashtagRoutes = Router()

hashtagRoutes.get("/trending", getTrendings);
hashtagRoutes.get("/hashtag/:hashtag", getByHashtag);

export default hashtagRoutes;