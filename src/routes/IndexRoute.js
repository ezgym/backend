import {Router} from "express";
import AuthCustomerRoute from "./AuthCustomerRoute.js";
import AuthAgencyRoute from "./AuthAgencyRoute.js";
import ServiceRoute from "./ServiceRoute.js";
import AgencyRoute from "./AgencyRoute.js";
import CustomerRoute from "./CustomerRoute.js";
import ActivityRoute from "./ActivityRoute.js";
import HiredServiceRoute from "./HiredServiceRoute.js";
import ReviewRoute from "./ReviewRoute.js";

const routerApi = (app) => {
    const router = Router();

    app.use("/api/v1", router);

    router.use("/auth/customers", AuthCustomerRoute);
    router.use("/auth/agencies", AuthAgencyRoute);
    router.use("/agencies", AgencyRoute);
    router.use("/customers", CustomerRoute);
    router.use("/services", ServiceRoute);
    router.use("/activities", ActivityRoute);
    router.use("/hired-services", HiredServiceRoute);
    router.use("/reviews", ReviewRoute);
}

export default routerApi;