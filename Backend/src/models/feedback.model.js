import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const feedbackSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            minLength: 1,
            maxLength: 5
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Vendor" || "Caterer" || "Media" || "Pandit"
        }
    },
    {
        timestamps: true
    }
)

feedbackSchema.plugin(mongooseAggregatePaginate)

export const Feedback = mongoose.model("Feedback", feedbackSchema)