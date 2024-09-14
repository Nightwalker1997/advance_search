"use client";

import React from "react";
import { carType } from "@/app/types/carsType";
import Image from "next/image";

type ListCardProsp = {
    carInfo: carType;
};

const ListCard: React.FC<ListCardProsp> = ({ carInfo }) => {
    const {
        imgsrc,
        make,
        model,
        year,
        exterior,
        price,
        engineCyl,
        fuelType,
        bodyStyle,
        driveLine,
        doors,
        transmission,
    } = carInfo;
    return (
        <div className="bg-gray-950 text-white flex flex-col lg:flex-row gap-2 border border-gray-500 mb-2 p-4">
            {/* img section */}
            <div className="flex flex-col relative w-full lg:w-1/6 gap-2">
                <Image
                    src={`/${imgsrc}`}
                    alt={""}
                    fill
                    className="object-cover"
                />
                <div className="flex flex-row justify-between content-center border border-white p-2">
                    <div>Add to compare</div>
                    <div className="bg-gray-500 text-white rounded-sm p-2">
                        Compare
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between content-start w-full lg:w-5/6 gap-2">
                <div className="w-full flex flex-row justify-between content-center">
                    <div className="text-lg font-semibold">
                        {year}&nbsp;{make}&nbsp;{model}
                    </div>
                    <div className="text-lg font-semibold flex flex-col">
                        <div className="flex flex-row">$ {price}</div>
                        <div className="text-sm font-light">
                            + taxes & license
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col content-center jus gap-2 w-full lg:w-1/2">
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Stock #:</div>
                            <div className="text-left">202450</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Engine:</div>
                            <div>{engineCyl}</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Fuel Type:</div>
                            <div>{fuelType}</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Exterior:</div>
                            <div>{exterior}</div>
                        </div>
                    </div>
                    <div className="flex flex-col content-center jus gap-2 w-full lg:w-1/2">
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Body Style:</div>
                            <div>{bodyStyle}</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Driveline:</div>
                            <div>{driveLine}</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Doors:</div>
                            <div>{doors}</div>
                        </div>
                        <div className="flex flex-row content-center justify-between text-left">
                            <div>Transmission:</div>
                            <div>{transmission}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCard;
