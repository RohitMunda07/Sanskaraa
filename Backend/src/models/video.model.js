import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true,
            index: true
        },
        views: {
            type: Number,
            default: 0
        },
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

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)

