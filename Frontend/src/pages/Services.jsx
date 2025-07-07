import React from "react";
import { MdOutlineHome } from 'react-icons/md';
import {
    Utensils,
    Tent,
    Lightbulb,
    Camera,
    Volume2,
} from "lucide-react"; // Replace with your actual icon library or SVGs

const services = [
    {
        title: "Catering",
        desc: "Veg & Jain options available",
        icon: (className) => {
            return (
                <Utensils className={className} />
            )
        },
    },
    {
        title: "Decoration",
        desc: "Theme-based traditional setups",
        icon: (className) => {
            return (
                <Tent className={className} />
            )
        }
    },
    {
        title: "Lighting",
        desc: "Ambient sacred lighting",
        icon: (className) => {
            return (
                <Lightbulb className={className} />
            )
        }
    },
    {
        title: "Videography",
        desc: "Capture every sacred moment",
        icon: (className) => {
            return (
                <Camera className={className} />
            )
        }
    },
    {
        title: "Sound System",
        desc: "Spiritual audio setup",
        icon: (className) => {
            return (
                <Volume2 className={className} />
            )
        }
    },
    {
        title: "Marriage Hall Booking",
        desc: "Spiritual audio setup",
        icon: (className) => {
            return (
                <MdOutlineHome className={className} />
            )
        }
    },
];

export default function Services() {
    return (
        <div className="min-h-screen px-8 py-8 bg-[#fdf6e3] flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-6 flex flex-col w-full items-center gap-y-6">
                <h1 className="text-4xl text-[#5d2b1f] font-bold md:text-5xl">Explore Our Ritual Services</h1>
                <p className="text-[#6e4e32] text-2xl font-semibold capitalize">Customized for every sacred moment</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:mt-5 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="min-h-56 bg-white cursor-pointer rounded-xl p-6 shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-all easy-in-out duration-300 hover:scale-110"
                    >
                        <div className="mb-4">{service.icon('w-10 h-10 text-[#622610]')}</div>
                        <h3 className="text-[#622610] font-semibold text-2xl font-serif text-center mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-lg text-center leading-relaxed max-w-full">{service.desc}</p>
                    </div>

                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 w-full flex justify-center">
                <button className="cursor-pointer text-black font-semibold font-[Nunito] text-3xl px-5 py-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 transition ">
                    Explore Full Services →
                </button>
            </div>
        </div>
    );
};

