
const preusername = "nazim@gmail.com"
const prepassword = "123"

module.exports={
    postLogin:(req,res)=>{
        const data = req.body;
        const username = data.username;
        const password = data.password;
            console.log(username, password)
        if(username === preusername && password === prepassword){
            console.log('good')
            res.json({success:true})
        }
        

        
    }
}