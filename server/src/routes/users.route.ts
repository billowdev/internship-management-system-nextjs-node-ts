import { FastifyInstance } from "fastify";
import { userHandler } from "../handlers";
import { protectedRoutes } from "../hooks/protectedRoutes.hook";
import { profileRouteSchema } from "./swagger-schema/users.route.schema";

export const userRouter = async (app: FastifyInstance) => {
  app.get(
    "/profile",
    { schema: profileRouteSchema },
    userHandler.handleUserProfile
  );

  // routes want to protect
  const Routes: object = {
    "/api/users/profile": true,
  };

  // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
  protectedRoutes(app, Routes);
};

export default userRouter;
