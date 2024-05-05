import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { D1Database } from '@cloudflare/workers-types';



export type Bindings = {
	DB: D1Database,
}

export const createPrismaInstance = (c: any): PrismaClient => {
	const adapter = new PrismaD1(c.env.DB);
	return new PrismaClient({ adapter });
}
