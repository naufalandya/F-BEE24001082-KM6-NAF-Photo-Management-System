import { Hono } from "hono";
//import { userController } from "../controllers";
import { Bindings } from "../config/adapter";
import image from "../routes/imagekit.route";

const v1 = new Hono<{ Bindings: Bindings }>()

v1.route("/image-kit", image)

export default v1