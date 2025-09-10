import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema = new Schema(
    {
        address: {
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
        eventDate: {
            type: Date,
            required: [true, 'Event Date is required'],
        },
        eventType: {
            type: String,
            enum: [
                'wedding', 'engagement', 'haldi', 'mehedi', 'sangeet', 'tilak', 'roka', 'nikah', 'walima', 'griha-pravesh', 'mundan', 'janeu', 'puja', 'jagrata',
                'birthday', 'anniversary', 'baby_shower', 'naming_ceremony', 'retirement',
                'corporate_party', 'product_launch', 'conference', 'seminar', 'inauguration', 'annual_day', 'awards_ceremony', 'team_building',
                'kitty-party', 'reunion', 'farewell', 'housewarming', 'cultural_program', 'graduation', 'festival_celebration', 'community_event', 'charity_event',
                'musical_evening', 'dance_performance', 'fashion_show', 'comedy_show',
                'others'
            ],
            required: [true, 'Event type is required']
        },
        attendees: {
            type: Number,
            required: [true, 'Attendees Number are required']
        },
        status: {
            type: String,
            enum: ['planned', 'ongoing', 'completed'],
            required: [true, 'Status is required']
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