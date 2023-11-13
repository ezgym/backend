import {Router} from "express";

import UserRoute from "./UserRoute.js";
import SubscriptionRoute from "./SubscriptionRoute.js";
import ExerciseRoute from "./ExerciseRoute.js";
import RoutinesRoute from "./RoutinesRoute.js";

const routerApi = (app) => {
    const router = Router();

    app.use("/api/v1", router);

   
    router.use("/users", UserRoute);
    router.use("/subscriptions", SubscriptionRoute);
    router.use("/exercise", ExerciseRoute);
    router.use("/routines", RoutinesRoute);
}

export default routerApi;