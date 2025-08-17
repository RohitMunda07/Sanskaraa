import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema = new Schema(
    {
        location: {
            type: String,
            required: [true, 'Location is required'],
            index: true
        },
        function: {
            type: String,
            required: [true, 'Function is required'],
            index: true
        },
        budget: {
            type: Number,
            required: [true, 'Budget is required']
        },
        rating: {
            type: Number,
            minLength: 1,
            maxLength: 5
        },
        content: {
            type: String,
            trim: true,
            minLength: 1,
            maxLength: 500
        },
        photoFile: {
            type: Schema.Types.ObjectId,
            ref: "Photo"
        },
        videoFile: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    },
    {
        timestamps: true
    }
)

eventSchema.plugin(mongooseAggregatePaginate)

export const Event = mongoose.model("Event", eventSchema)