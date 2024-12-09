import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createMiddleware } from "hono/factory";
import { E } from "../src";

 export const prismaMiddleware = createMiddleware<E>( async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    c.set('prisma', prisma);
    await next();
   
})