const itemsSchema = require("../Models/itemsSchema");

const upload = (req,res)=>{
    
    console.log(req.body)
    console.log(req.file.filename)
    res.send(req.file)

    // {
    //     "fieldname": "image",
    //     "originalname": "2017.10.03 (2).jpg",
    //     "encoding": "7bit",
    //     "mimetype": "image/jpeg",
    //     "destination": "../uploads/",
    //     "filename": "17003364155822017.10.03 (2).jpg",
    //     "path": "..\\uploads\\17003364155822017.10.03 (2).jpg",
    //     "size": 6609779
    // }
}

const itemsUpload = async(req,res)=>{  
    
    try{
        
        const {name,mobile,email,aadhar,pan,company,title,doj,doe,status,reasonToEndorse,proof,witnesses} = req.body;

        // let exist = await authSchema.findOne({email})

        // if(exist){
        //     return res.json('User Already Exist')
        // }

        // if(password !== confirm_password){
        //     return res.json('Password mismatch');
        // }
        
        let newUser = new itemsSchema({
            name,
            mobile,
            email,
            aadhar,
            pan,
            company,
            title,
            doj,
            doe,
            status,
            reasonToEndorse,
            proof,
            witnesses
        })
        await newUser.save();
        res.status(200).json('Added to database')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }

    
}

module.exports = {upload, itemsUpload}