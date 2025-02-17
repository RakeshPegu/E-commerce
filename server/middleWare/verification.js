import jwt from 'jsonwebtoken';
const verification = async(req, res, next)=>{
    const token = req.cookies.token;
    try {
       
        if(!token){
            res.status(401).json({message:"Not authenticated"})
        }
        jwt.verify(token, process.env.JWT_SECRECT_KEY, async(err, payload)=>{
            if(err){
                return res.status(403).json({message:"Not authorized"})
            }
            payload.id = req.userId,
            next()
        })

        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}
export default verification;