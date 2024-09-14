"use client";

import React, { useState, useEffect } from "react";
import { carsType, carType } from "@/app/types/carsType";
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaArrowDownWideShort, FaArrowUpWideShort } from "react-icons/fa6";
import sortArray from "@/app/libs/sortByKey";
import GridCard from "./GridCard";
import ListCard from "./ListCard";

type ShowCarsProps = {
    carsData: carsType;
};
type des_asc_type = "des" | "asc";
type grid_list_type = "Grid" | "List";

const ShowCars: React.FC<ShowCarsProps> = ({ carsData }) => {
    const [sortBy, setSortBy] = useState<keyof carType>("make");
    const [desAsc, setDesAsc] = useState<des_asc_type>("asc");
    const [gridList, setGridList] = useState<grid_list_type>("List");
    const [sortedCar, setSortedCar] = useState<carsType>(carsData);

    useEffect(() => {
        setSortedCar(sortArray(carsData, sortBy, desAsc));
        console.log("sortedCars: ", sortedCar);
    }, [sortBy, desAsc, carsData]);

    return (
        <div className="bg-black text-white w-full flex flex-col">
            {/* Vehicles counts */}
            <div className="w-full flex text-left text-sm font-normal p-2">
                {carsData.length}&nbsp;Vehicles
            </div>
            {/* sort  and show setting */}
            <div className="w-full flex flex-row content-center justify-between">
                <div className="flex flex-row content-center justify-center text-white gap-2">
                    <div className="text-sm font-semibold p-2">Sort:</div>
                    <div
                        className="text-sm font-normal border-r p-2 border-white cursor-pointer"
                        onClick={() => {
                            setSortBy("year");
                        }}
                    >
                        Year
                    </div>
                    <div
                        className="text-sm font-normal border-r p-2 border-white cursor-pointer"
                        onClick={() => {
                            setSortBy("make");
                        }}
                    >
                        Make
                    </div>
                    <div
                        className="text-sm font-normal border-r p-2 border-white cursor-pointer"
                        onClick={() => {
                            setSortBy("model");
                        }}
                    >
                        Modle
                    </div>
                    <div
                        className="text-sm font-normal border-r p-2 border-white cursor-pointer"
                        onClick={() => {
                            setSortBy("bodyStyle");
                        }}
                    >
                        Body Style
                    </div>
                    <div
                        className="text-sm font-normal border-r p-2 border-white cursor-pointer"
                        onClick={() => {
                            setSortBy("mileage");
                        }}
                    >
                        Mileage
                    </div>
                    <div
                        className="text-sm font-normal p-2 cursor-pointer"
                        onClick={() => {
                            setSortBy("price");
                        }}
                    >
                        Price
                    </div>
                    <div
                        className="text-white p-2 cursor-pointer"
                        onClick={() => {
                            setDesAsc(desAsc === "asc" ? "des" : "asc");
                        }}
                    >
                        {desAsc === "asc" ? (
                            <FaArrowUpWideShort color="#fff" size={20} />
                        ) : (
                            <FaArrowDownWideShort color="#fff" size={20} />
                        )}
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div
                        className="text-white p-2 mx-1cursor-pointer"
                        onClick={() => {
                            setGridList("List");
                        }}
                    >
                        <FaListUl color="#fff" size={20} />
                    </div>
                    <div
                        className="text-white p-2 mx-1 cursor-pointer"
                        onClick={() => {
                            setGridList("Grid");
                        }}
                    >
                        <IoGrid color="#fff" size={20} />
                    </div>
                </div>
            </div>
            {/* cars show */}
            {gridList === "List" ? (
                <div className="flex flex-col gap-4 mt-2">
                    {sortedCar.map((car, index) => (
                        <ListCard carInfo={car} key={index} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-wrap gap-4 mt-2">
                    {sortedCar.map((car, index) => (
                        <GridCard carInfo={car} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowCars;
