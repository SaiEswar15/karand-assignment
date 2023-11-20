
const itemsSchema = require("../Models/itemsSchema");


const search = async (req, res) => {

    try{
        const {email,aadhar,pan} = req.body;
        console.log(req.body)
        let exist = await itemsSchema.findOne({email});
        console.log(exist.aadhar)
        if(!exist) {
            return res.json('No data found');
        }
        if(exist.aadhar !== parseInt(aadhar)) {
            return res.json('Aadhar did not match');
        }
        if(exist.pan !== pan) {
            return res.json('PAN number did not match');
        }
        return res.json(exist)

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
}

module.exports =  {search}