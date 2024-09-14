"use client";

import React from "react";
import { carType } from "@/app/types/carsType";

type GridCardProps = {
    carInfo: carType;
};

const GridCard: React.FC<GridCardProps> = ({ carInfo }) => {
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
        <div className="bg-slate-800 text-white flex flex-col">
            <div>
                Name: {year} {make} {model}{" "}
            </div>
            <div className="flex">fuel Type: {fuelType}</div>
            <div className="flex">exterior: {exterior}</div>
        </div>
    );
};

export default GridCard;
