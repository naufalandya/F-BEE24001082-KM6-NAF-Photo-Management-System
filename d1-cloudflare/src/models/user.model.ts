import { Context } from "hono";
import { createPrismaInstance as prisma } from "../config/adapter";
import { uuidv7 } from "uuidv7";
import bcryptjs from "bcryptjs"

export const getUsers = async function(c : Context) {
    try {
        const result = await prisma(c).users.findMany()
        return result
    } catch (err) {
        throw err
    }
}

export const getUserById = async function (c : Context, id : string) {
    
    try {
        const result = await prisma(c).users.findUnique({
            where: {
                id : id
            }
        })

        return result
    } catch(err) {
        throw err
    }
}

type typeCreate = {
    id : string
    name : string
    username : string
    email : string
    password : string  
}

export const createUser = async function(c : Context, createUser : typeCreate) {
    
    try {

        const isEmailExist = await prisma(c).users.findUnique({
                where : { 
                    email : createUser.email 
                }
            }
        )

        if  (isEmailExist) {
            return 1
        }

        const isUsernameExist = await prisma(c).users.findUnique({
                where : { 
                    username : createUser.username 
                }
            }
        )

        if (isUsernameExist) {
            return 2
        }

        const uniqueId = uuidv7()
        const hashedPassword = await bcryptjs.hash(createUser.password, 10)

        const result = await prisma(c).users.create({
            data: {
                id: uniqueId,
                name: createUser.name,
                username : createUser.username,
                email: createUser.email,
                password: hashedPassword,
                created_at: new Date().toString()
            }
        })

        return result

    } catch (err) {
        throw err
    }
}


type typeUpdate = {
    id : string
    name : string
    username : string
    email : string
    password : string  
}


export const updateUser = async function(c: Context, updateUser : typeUpdate) {
    try {
        const isId = await prisma(c).users.findUnique({
            where : {
                id : updateUser.id
            }
        })


        if(!isId) {
            return 0
        }

        return isId



        
    } catch (err) {
        throw err
    }
}