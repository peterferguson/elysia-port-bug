import { Elysia } from "elysia";

export default new Elysia().get("/", () => "Hello Elysia");
// .listen(process.env.PORT ?? 3000, ({ hostname, port }) => {
// 	console.log(`🦊 Elysia is running at ${hostname}:${port}`);
// });
