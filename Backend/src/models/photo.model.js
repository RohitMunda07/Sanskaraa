import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const photoSchema = new Schema(
    {
        photoFile: {
            type: String,
            required: [true, 'PhotoFile is required']
        },
        title: {
            type: String,
            minLength: 5,
            maxLength: 50
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

photoSchema.plugin(mongooseAggregatePaginate)

export const Photo = mongoose.model("Photo", photoSchema)