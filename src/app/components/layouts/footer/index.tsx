import SubFooter from "./subfooter";
import { Dealership, OurHours, OurContacts, Icons } from "@/constant/footer";
import Link from "next/link";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookSquare,
    FaInstagramSquare,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col text-white bg-black">
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col lg:w-1/4 w-full">
                    <div className="text-lg font-semibold text-left">
                        Dealership
                    </div>
                    <div className="text-sm font-normal text-left w-full">
                        <p>{Dealership}</p>
                    </div>
                    <div className="text-sm font-normal text-left w-full">
                        <Link
                            href={
                                "https://hzd-on-motorsquad.azurewebsites.net/about-us"
                            }
                        >
                            Read More...
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/4 w-full">
                    <div className="text-lg font-semibold text-left">
                        Our Hours
                    </div>
                    <div className="flex flex-col content-start lg:w-full w-1/2">
                        {OurHours.map(
                            ({ day, startAt, endAt, desc }, index) => (
                                <div className="flex flex-row" key={index}>
                                    <div className="w-1/2 text-left">{day}</div>
                                    <div className="w-1/2 text-right">
                                        {desc.length > 0
                                            ? desc
                                            : startAt + " - " + endAt}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/4 w-full text-left content-start justify-start text-sm font-normal">
                    <div className="text-lg font-semibold text-left">
                        Our contacts
                    </div>
                    <div className="text-sm font-normal flex justify-center text-left">
                        <FaMapMarkerAlt color="white" size={13} />
                        {OurContacts.address}
                    </div>
                    <div className="text-sm font-normal flex justify-center text-left">
                        <FaPhoneAlt color="white" size={13} />
                        {OurContacts.phone}
                    </div>
                    <div className="text-sm font-normal flex justify-center content-start">
                        <FaFacebookSquare color="" />
                        <FaInstagramSquare color="" />
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/4 w-full">
                    {Icons.map(({ src, name }, index) => (
                        <div
                            className="w-[144px] h-[45px] flex relative"
                            key={index}
                        >
                            <Image
                                src={src}
                                alt={name}
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <SubFooter />
        </div>
    );
};

export default Footer;
