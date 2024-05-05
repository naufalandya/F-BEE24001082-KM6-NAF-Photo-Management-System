import { Hono } from "hono";
import { Bindings } from "../config/adapter";
import { imagekitController } from "../controllers";
import { z } from 'zod'
import { zValidator } from "@hono/zod-validator";
import { bodyLimit } from "hono/body-limit";

const image = new Hono<{Bindings : Bindings}>().basePath("/meta-data-image")

image.get("/", async (c) => imagekitController.getAllMeta(c) )

image.post("/", bodyLimit({
    maxSize: 1 * 1024,
    onError: (c) => {
      return c.json({
        status : false,
        message: 'invalid Data Overflow More Than 1KB'
      }, 413)
    },
  }),
  
  zValidator('json', z.object({
    title : z.string().max(80),
    description : z.string().max(100),
    link_image : z.string().max(155)
  }), (result, c) => {
        if(!result.success) {
            return c.json({
                error : {
                    status: false,
                    message: result.error
                }
            }, 400)
        }
    }

), 

  (c) => imagekitController.saveMeta(c)

)

image.delete("/:id", bodyLimit({
    maxSize: 1 * 1024,
    onError: (c) => {
      return c.json({
        status : false,
        message: 'invalid Data Overflow More Than 1KB'
      }, 413)
    },
  }),
  
  zValidator('param', z.object({
    id : z.string().max(155)
  }), (result, c) => {
        if(!result.success) {
            return c.json({
                error : {
                    status: false,
                    message: result.error
                }
            }, 400)
        }
    }

), 

  (c) => imagekitController.deleteMeta(c)

)

export default image

