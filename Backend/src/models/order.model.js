import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const orderSchema = new Schema(
    {
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
            maxLength: 500
        },
        items: {
            type: Array,
            required: [true, 'Items are required']
        },
        photoFile: [
            {
                type: Schema.Types.ObjectId,
                ref: "Photo" 
            }
        ],
        videoFile: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    },
    {
        timestamps: true
    }
)

orderSchema.plugin(mongooseAggregatePaginate)

export const Order = mongoose.model("Order", orderSchema)