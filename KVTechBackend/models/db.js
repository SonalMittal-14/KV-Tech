const mongoose = require('mongoose')

const mongo_url = process.env.MONGOOSE_URL

mongoose.connect(mongo_url)
.then(()=>{
    console.log("Le bhai ho gaya tera database connect.");
})
.catch(error => {
    console.log(error);
    
})
