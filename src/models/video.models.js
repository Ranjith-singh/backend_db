import mongoose,{Schema} from "mongoose";

import mongooseAggregatePgaeinit from "mongoose-aggregate-paginate-v2"

const video_schema=mongoose.Schema({
    videofile:{
        type:String, //chowdinary
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    duration:{
        type :Number,
        default :0
    },
    views:{
        type:Number,
        default :0
    },
    is_published:{
        type:Boolean,
        default :0
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})

video_schema.plugin(mongooseAggregatePgaeinit)

export const Video=mongoose.model("Video",video_schema)