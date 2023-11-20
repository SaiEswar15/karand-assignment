
const authSchema = require("../Models/dataSchema");

const signup = async (req, res) =>{
    try{
        
        const {username,mobile,email,password,confirm_password} = req.body;

        let exist = await authSchema.findOne({email})

        if(exist){
            return res.json('User Already Exist')
        }

        if(password !== confirm_password){
            return res.json('Password mismatch');
        }
        
        let newUser = new authSchema({
            username,
            mobile,
            email,
            password,
            confirm_password
        })
        await newUser.save();
        res.status(200).json('Sign up Successful')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
}

const get = (req,res)=>{
    res.send("hai this fine here");
}

const login = async (req, res) => {

    try{
        const {email,password} = req.body;
        let exist = await authSchema.findOne({email});
        if(!exist) {
            return res.json('User Not Found');
        }
        if(exist.password !== password) {
            return res.json('Invalid credentials');
        }
        return res.json(exist)

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
}

module.exports =  {signup, get, login}