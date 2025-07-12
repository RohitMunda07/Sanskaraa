import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function TopButton() {

    const [showTop, setShowTop] = useState(false)

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 500) {
                // console.log("greter than 500");
                setShowTop(true)
            } else {
                setShowTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [showTop])

    return (
        <div className="">
            <button
                className={`${showTop ? 'block' : 'hidden'} bg-blue-700 !w-15 h-15 rounded-full cursor-pointer fixed text-6xl bottom-10 right-10`}>
                <FaArrowCircleUp
                    onClick={scrollUp}
                    className="text-yellow-400" />
            </button>
        </div>

    )
}
