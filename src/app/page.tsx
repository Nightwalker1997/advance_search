"use client";
import { carsType, carsSearchParamType } from "@/app/types/carsType";

import { useState } from "react";
import CarsData from "@/data/cars";
import ShowCars from "./components/ShowCars";
import CarsSearchBox from "./components/CarsSearchBox";
export default function Home() {
    const [searchedCarData, setSearchedCarData] = useState<carsType>([]);
    // const anyModel = AnyModel(cars);
    // console.log(anyModel);
    const handleSearchBox = (carsSearched: carsType) => {
        setSearchedCarData(carsSearched);
        console.log("CarsDataChanged", carsSearched);
    };
    return (
        <div className="flex flex-col p-2 bg-[#212020] h-screen">
            <CarsSearchBox
                CarsData={CarsData}
                handleSearchBox={handleSearchBox}
            />
            <ShowCars
                carsData={
                    searchedCarData.length > 0 ? searchedCarData : CarsData
                }
            />
        </div>
    );
}
