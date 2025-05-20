import { createRoute, z } from "@hono/zod-openapi";
import { createSelectSchema } from "drizzle-zod";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { clientUsersTable } from "@/db/schema";

const tags = ["Users"];

const selectClientUserSchema = createSelectSchema(clientUsersTable);

export const listUsers = createRoute({
    method: "get",
    path: "/users/list",
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectClientUserSchema),
            "The list of users",
        ),
    },
    tags,
});

export type ListUsersRoute = typeof listUsers; 