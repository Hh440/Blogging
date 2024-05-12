import { Hono } from "hono";
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput, createPostInput, updatePostInput } from "blogger_common"

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const jwt = authHeader.split(' ')[1];
        const user = await verify(jwt, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
  
  
  })
  


blogRouter.post('/', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body= await c.req.json()
    const userId=c.get('userId')


    const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

    const currentdate= new Date()

   const post= await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    })


    return c.json({
        id:post.id
    })
  })
  
  blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body= await c.req.json()


    const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

    const post= await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })


    return c.text('Upadated blog')
  })



  blogRouter.get('/bulk',async(c:any) =>{

   
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
    try{
	const posts = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            publishedDate:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })

	return c.json({posts});
} catch(error){
    console.error("Error fetching posts:", error);
    return c.status(500).json({ error: "Internal Server Error" });
}
  
  })


  
  blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id= c.req.param('id')

    try{

    const post= await prisma.post.findUnique({
        where:{
            id
        },select:{
            id:true,
            title:true,
            content:true,
            publishedDate:true,
            author:{
                select:{
                    name:true
                }
            }

        
        }
    })

    return c.json({post})
    }catch(e){
        c.status(411)
        return c.json({
            message:"Error while fetching the blog"
        })
    }




  })
  
  