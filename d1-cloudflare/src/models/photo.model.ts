import { createPrismaInstance as prisma } from "../config/adapter";
import { Context } from "hono";


export const saveMetaDataPicture = async function(c : Context, title : string, description : string, link_image : string) {
    
    const clean_link_image = link_image.replace(/\?updatedAt=\d+/, '');

    try {
        const result = await prisma(c).posts.create({data : {
            title : title,
            description : description,
            link_image: clean_link_image
        }})

        return result
    } catch (err) {
        throw err
    }
}

export const deleteMetaDataPicture = async function(c: Context, id : number) {
   
   
    try {
        const result = await prisma(c).posts.delete({
            where: {
                id: id
            }
        });

        return result;
    } catch (err) {
        throw err;
    }
}


export const getAllMetaDataPicture = async function(c : Context) {
    try {
        const result = await prisma(c).posts.findMany()

        return result

    } catch (err) {
        throw err
    }
}