const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')
const JWT_TOKEN='reorijofivmweoirfjwoeiwosfhbjh'

const displayUserData=async(request,response)=>{
    const {token} = request.body
    try
    {
        const loggedInUser=jwt.verify(token,JWT_TOKEN)
        const loggedInUseremail=loggedInUser.email
        const authenticateUser=await userModel.findOne({email:loggedInUseremail})

        if(authenticateUser)
        {
            response.status(200).json(authenticateUser)
        }
        else
        {
            response.status(400).send({message:`Something went wrong !!`})
        }
    }
    catch(error)
    {
        response.status(500).send({message:error.message})
    }
}

module.exports={displayUserData}