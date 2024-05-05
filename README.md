
# Photo Management System






## Demo

#### Link : https://f5b42b21.photo-management-system.pages.dev


## Features

- Upload Photo to ImageKit
- Display Image to Client 
- Delete Photo in Database
- Create Photo with its Information


## API Reference

#### Link : https://d1-cloudflare.andyakuliah.workers.dev/

#### Get Meta Data

```bash
  GET /api/v1/image-kit/meta-data-image
```

| Parameter | Type     | Description                |
| :-------  |:------- | :------------------------- |
| `none` |`json` | Retrieve all meta data of saved images |

#### Create Meta Data

```POST
  POST /api/v1/image-kit/meta-data-image
```

| Parameter | Type     | Description                |
| :-------  |:------- | :------------------------- |
| `none` |`json` | Save meta data from form to D1 |

#### Delete Meta Data

```bash
  DELETE /api/v1/image-kit/meta-data-image/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `json` | delete meta-data based on id |


#### Link : https://media-handler-railway-production.up.railway.app/

#### Get Image-Kit credentials

```bash
  GET /api/v1/image-kit/auth
```

| Parameter | Type     | Description                |
| :-------  |:------- | :------------------------- |
| `none` |`json` | retrieve image-kit credentials for client-side |

## Tech Stack

**Client:** React, Cloudflare Pages

**Server:** Hono, Clodflare Workers, Railways

**Media Storage:** Image-Kit

**Database:** D1 Cloudflare

**ORM:** Prisma
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PUBLIC_IMAGE_KIT`

`PRIVATE_IMAGE_KIT`

`ENDPOINT_IMAGE_KIT`


## References

**Hono :** https://hono.dev/api/hono

**React - Cloudflare Pages:** https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

**ImageKit - React:** https://docs.imagekit.io/getting-started/quickstart-guides/react

**How to use D1 with Hono:** https://developers.cloudflare.com/d1/examples/d1-and-hono/

**How to use D1 with Prisma :** https://blog.cloudflare.com/prisma-orm-and-d1


**Prisma:** https://www.prisma.io/docs/orm/overview/databases/cloudflare-d1



## Client Side - Deployment

#### 1. Open Client-Side Folder then Install the package

```bash
  bun install 
```

#### 2. Build the tsx files into dist file 

```bash
  bun run build
```
or, you can directly

```bash
  tsc
```
and

```bash
  npx vite build
```

#### 3. Setup Wrangler

```bash
  npm install -g wrangler
```

and 

```bash
  wrangler login
```

#### 4. deploy 

```bash
  npx wrangler pages dist
```

