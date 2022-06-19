import { FastifyInstance } from "fastify";
import { protectedRoutes } from "../hooks/protectedRoutes.hook";
import { createInternshipSchema } from "./swagger-schema/internship.route.schema";
import * as internshipHandler from "../handlers/internship.handler"
export const internshipRouter = async (app: FastifyInstance) => {
  app.get(
    "/get",
    internshipHandler.getInternship
  )

  app.post(
    "/create",
    { schema: createInternshipSchema },
    internshipHandler.createInternship
  );

  // routes want to protect
  const Routes: object = {
    "/api/internship/create": true,
    "/api/internship/get": true,
  };

  // function add hook onRequest -> protectedRoutes(appInstance, Routes you want to protect)
  protectedRoutes(app, Routes);
};

export default internshipRouter;

