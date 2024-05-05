import { Context } from "hono"
import { deleteMetaDataPicture, getAllMetaDataPicture, saveMetaDataPicture } from "../models/photo.model"

export const saveMeta = async function(c : Context){

    const {title, description, link_image}  = await c.req.json()

    try {
        const result = await saveMetaDataPicture(c, title, description, link_image)
        return c.json({
            status : true,
            message : "successfully saved image",
            data : result
        }, 201)

    } catch (err) {
        return c.json({ error : {
            status : false,
            message : 'invalid'
        }}, 400)
    }
}

export const getAllMeta = async function(c : Context) {
    try {
        const result = await getAllMetaDataPicture(c)
        return c.json({
            status : true,
            message : 'success',
            length : result.length,
            data : result
        }, 200)
    
    } catch (err) {
        return c.json({
            error : {
                status : false,
                message : 'unexpected error occured'
            }
        }, 400)
    }
}

export const deleteMeta = async function(c: Context) {
    const id = c.req.param('id')

    const intI = Number(id) 

    try {
        const result = await deleteMetaDataPicture(c, intI)
        return c.json({
            status : true,
            message : "successfully deleted image",
            detail : result

        }, 201)
    } catch (err) {
        return c.json({
            error : {
                status : false,
                message : "error occured while saving the picture"
            }
        })
    }
}