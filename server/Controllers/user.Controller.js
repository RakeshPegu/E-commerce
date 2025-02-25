import prisma from "../lib/prisma.js"
export const getUser = async(req, res)=>{
    const tokenUserId = req.userId
    const userId = req.params.id
    try {
        if(tokenUserId !== userId){
            return res.status(401).json({message:"you're not allowed"})
        }
        const user = await prisma.user.findUnique( {
            where: {id:tokenUserId}
        })
    
        res.status(200).json(user)

        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}
export const deleteUser = async(req, res)=>{
    const tokenUserId = req.userId
    const userId = req.params.id
  

    try {
        console.log("this is first")
        if(tokenUserId !== userId){
            return res.status(203).json({message:"You're not authorized to change the user info"})
        }
        
        // delete the user
        await prisma.user.delete({
            where:{id:userId}
        })
        console.log('done')
        res.status(200).json({message:"User has been deleted successfully"})

        
    } catch (error) {
       res.status(500).json({message:"Something went wrong"})
    }
}
export const updateUser = async(req, res)=>{
    const tokenUserId = req.userId
    const userId = req.params.id
    const{...userInfo} = req.body
    console.log(userInfo)
    try {
        if(tokenUserId !== userId){
            return res.status(203).json({message:"You're not authorized to change the user info"})
        }
       
        const newUserInfo = await prisma.user.update({
            where: {id:tokenUserId},
            data: userInfo
        })
        
        res.status(200).json(newUserInfo)
        console.log('done nicely')
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}