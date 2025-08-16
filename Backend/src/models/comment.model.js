import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 200
        },
        photoMedia: [
            {
                type: Schema.Types.ObjectId,
                ref: "Photo"
            }
        ],
        videoMedia: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        owner: [
            {
                type: Schema.Types.ObjectId,
                refpath: "ownerType"
            }
        ],
        ownerType: [
            {
                type: String,
                enum: ['Vendor', 'Caterer', 'Media', 'Decorator', 'Pandit', 'User']
            }
        ]
    },
    {
        timestamps: true
    }
)

commentSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentSchema)