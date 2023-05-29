import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
    
     option: {
        type:String,
        required:true,
      },
    
      
     
},
    {timestamps:true}
);



export default mongoose.model('voters',voterSchema);