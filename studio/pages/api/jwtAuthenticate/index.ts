import { NextApiRequest,NextApiResponse } from "next"


export default (req: NextApiRequest, res: NextApiResponse) =>{
    const { method } = req

  switch (method) {
    case 'POST':
      return handlePost(req, res)
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ error: { message: `Method ${method} Not Allowed` } })
  }
}
const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const  jwt  = req.body
    console.log("in hadlepost",jwt,process.env.SUPABASE_SERVICE_KEY)
    const response = await fetch("http://localhost:8000/auth/v1/user",{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
        "apikey":`${process.env.SUPABASE_SERVICE_KEY}`,
        "Authorization":`Bearer ${jwt}`
    },
  }).then(async data=>{
    if (data.status==200){
      console.log("success")
      return data.text()
    }else{
      console.log("unauthorize")
      const messg=await data.text()
      console.log(messg)
      throw new Error(messg)
    }
  }).then(data=>res.status(200).send(data)).catch(err=>res.status(401).send(err.message||"something went wrong"))
  }