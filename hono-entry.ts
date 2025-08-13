import { createTodoHandler } from "./server/create-todo-handler";
import { vikeHandler } from "./server/vike-handler";
import { GET as getBlogData } from "./server/api/blog-data";
import { GET as getBlogPost } from "./server/api/blog-post";
import { Hono } from "hono";
import { createHandler } from "@universal-middleware/hono";

const app = new Hono();

app.post("/api/todo/create", createHandler(createTodoHandler)());
app.get("/api/blog-data", getBlogData);
app.get("/api/blog-post", getBlogPost);

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export default app;
