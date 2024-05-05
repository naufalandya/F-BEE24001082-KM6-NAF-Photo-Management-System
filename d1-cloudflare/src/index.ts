import { Hono } from 'hono'
import { Bindings } from 'hono/types';


import { logger } from 'hono/logger'
import { etag } from 'hono/etag'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { secureHeaders } from 'hono/secure-headers'

import v1 from './api/v1';

const app = new Hono<{ Bindings: Bindings }>({ strict: true })

app.use('/*', async (c, next) => {
    const corsMiddleware = cors({
      origin: "https://f5b42b21.photo-management-system.pages.dev",
      allowHeaders: ['Origin', 'Content-Type', 'Authorization'],
      allowMethods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
    return await corsMiddleware(c, next)
  })

app.use(secureHeaders())
app.use("*", etag(), logger(), prettyJSON())
app.use(trimTrailingSlash())

app.route("/api/v1", v1)

app.get('/haha', (c) => {
    return c.json({
      message : "Hello Andya"
    }, 200)
})
  
app.notFound((c) => {
    return c.json({
        status : false,
        message : "Page is not found"
    }, 404)
})
  
app.use('*', async (c, next) => {
    await next()
    if (c.error) {
        c.json({
        message: "Internal Server Error"
        }, 500)
    }
})


export default app