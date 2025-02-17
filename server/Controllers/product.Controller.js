import prisma from "../lib/prisma.js"

export const createProduct = async(req, res)=>{
    const {name, quantity, price, description} = req.body
    try {
        if(!name || !quantity || !price || !description){
            return res.status(400).json({message:"All the fields are mandatory"})
        }
        const newProduct = await prisma.product.create( {
            data: {
                name,
                quantity,
                price,
                description
            }
        })
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message:"Somethin went wrong"})
    }
}
export const getProducts = async(req, res)=>{
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)

        
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}

export const getProduct = async(req, res)=>{
    const id = req.params.id

    try {
        const product = await prisma.product.findUnique({
            where: {id}
        })
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"
        })
    }

}
export const deleteProduct = async(req, res)=>{
    const tokenUserId = req.userId
    const productId = req.params.id
    try {
        const product = await prisma.product.findUnique( {
            where: {id:productId}
        })
        if(!tokenUserId !== product.authorId){
            return res.status(401).json({message:"You're not authorized"})
        }
        await prisma.product.findUnique( {
            where: {
                id:productId
            }
        })
        res.status(200).json({message:'item has been deleted successfully'})
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}
export const updateProduct = async(req,res)=>{
    const tokenUserId = req.userId
    const productId = req.params.id
    const {...productInfo} = req.body
    try {
        const product = await prisma.product.findUnique( {
            where: {id:productId}
        })
        if(tokenUserId !== product.authorId){
            return res.status(401).json({message:"you're not authorized"})
        }
        const newProductInfo = await prisma.product.update({
            where: {id:product},
            data: {
                ...productInfo
            }
        })

        res.status(200).json(newProductInfo)
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        
    }
}