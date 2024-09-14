"use client";
import React, { useEffect, useState } from "react";
import SelectBox from "@/app/components/ui/selectbox";
import InputBox from "@/app/components/ui/inputBox";
import ButtonBox from "@/app/components/ui/buttonBox";
import { FaSearch } from "react-icons/fa";
import colors from "@/data/colors";
import {
    AnyMake,
    AnyModel,
    CarsYear,
    AnyEngine,
    handMadePrice,
    handMadeMileage,
    AnyFuelType,
    AnyBodyStyle,
} from "@/app/libs/getSelectorParams";
import sortArray from "@/app/libs/sortByKey";
import { carsType, carsSearchParamType } from "@/app/types/carsType";
import {
    SearchByInput,
    SearchBySelectors,
    SearchCars,
} from "@/app/libs/searchCar";

const searchParams = {
    make: "",
    model: "",
    minYear: "",
    maxYear: "",
    engine: "",
    color: "",
    minPrice: "",
    maxPrice: "",
    minMileage: "",
    maxMileage: "",
    fuelType: "",
    bodyStyle: "",
    searchInput: "",
};

type CarsSearchBoxProps = {
    CarsData: carsType;
    handleSearchBox: (carsSearched: carsType) => void;
};

const CarsSearchBox: React.FC<CarsSearchBoxProps> = ({
    CarsData,
    handleSearchBox,
}) => {
    // const [values, setValues] = useState<any>(searchParams);
    const [searchDataParams, setSearchDataParams] = useState(searchParams);

    const Makes = AnyMake(CarsData);

    const handleResetAll = () => {
        setSearchDataParams(searchParams);
        handleSearchBox(CarsData);
    };
    const handleSearch = () => {
        handleSearchBox(SearchCars(CarsData, searchDataParams));
    };
    const handleMakesChange = (e: any) => {
        setSearchDataParams({ ...searchDataParams, ["make"]: e.target.value });
    };
    const handelModelChange = (e: any) => {
        setSearchDataParams({ ...searchDataParams, ["model"]: e.target.value });
    };
    const handleMinYearChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["minYear"]: e.target.value,
        });
    };
    const handleMaxYearChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["maxYear"]: e.target.value,
        });
    };
    const handleEngineChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["engine"]: e.target.value,
        });
    };
    const handleColorChange = (e: any) => {
        setSearchDataParams({ ...searchDataParams, ["color"]: e.target.value });
    };
    const handleMinPriceChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["minPrice"]: e.target.value,
        });
    };
    const handleMaxPriceChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["maxPrice"]: e.target.value,
        });
    };
    const handleMinMileageChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["minMileage"]: e.target.value,
        });
    };
    const handleMaxMileageChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["maxMileage"]: e.target.value,
        });
    };
    const handleFuelTypeChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["fuelType"]: e.target.value,
        });
    };

    const handleBodyStyleChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["bodyStyle"]: e.target.value,
        });
    };
    const handleInputSearchBoxChange = (e: any) => {
        setSearchDataParams({
            ...searchDataParams,
            ["searchInput"]: e.target.value,
        });

        // SearchByInput
        // working on it
    };

    const Models = AnyModel(CarsData, searchDataParams);
    const Years = CarsYear(CarsData, searchDataParams);
    const MinYears = Years.sort((a, b) => parseFloat(a) - parseFloat(b));
    const MaxYears = Years.sort((a, b) => parseFloat(b) - parseFloat(a));
    const Engine = AnyEngine(CarsData, searchDataParams);
    const MinPrice = handMadePrice().sort(
        (a, b) => parseFloat(a) - parseFloat(b)
    );
    const MaxPrice = handMadePrice().sort(
        (a, b) => parseFloat(b) - parseFloat(a)
    );
    const MinMileage = handMadeMileage().sort(
        (a, b) => parseFloat(a) - parseFloat(b)
    );
    const MaxMileage = handMadeMileage().sort(
        (a, b) => parseFloat(b) - parseFloat(a)
    );

    const FuelType = AnyFuelType(CarsData, searchDataParams);
    const BodyStyle = AnyBodyStyle(CarsData, searchDataParams);

    return (
        <div className="w-full flex flex-col p-2">
            {/* Title */}
            <div className="w-full flex items-center justify-start text-white">
                <FaSearch scale={14} />
                Search
            </div>
            <div className="flex flex-wrap w-full content-center">
                {/* Any Make */}
                <SelectBox
                    name="Any Make"
                    options={Makes.sort()}
                    onChange={handleMakesChange}
                    value={searchDataParams.make}
                    className="flex w-full lg:w-1/4 "
                />
                {/* Any Model */}
                <SelectBox
                    name="Any Model"
                    options={Models.sort()}
                    onChange={handelModelChange}
                    disabled={searchDataParams.make.length <= 0}
                    value={searchDataParams.model}
                    className="flex w-full lg:w-1/4"
                />

                {/* LG */}
                {/* Min Year for lg screen */}
                <SelectBox
                    name="Min Year"
                    options={MinYears}
                    onChange={handleMinYearChange}
                    value={searchDataParams.minYear}
                    className="hidden lg:flex lg:w-1/6"
                />
                {/* Max Year for lg screen */}
                <SelectBox
                    name="Max Year"
                    options={MaxYears}
                    onChange={handleMaxYearChange}
                    value={searchDataParams.maxYear}
                    className="hidden lg:flex lg:w-1/6 "
                />
                {/* Any Engine */}
                <SelectBox
                    name="Any Engine"
                    options={Engine}
                    onChange={handleEngineChange}
                    value={searchDataParams.engine}
                    className="hidden lg:flex lg:w-1/6"
                />
                {/* Any Color */}
                <SelectBox
                    name="Any Color"
                    options={colors}
                    onChange={handleColorChange}
                    value={searchDataParams.color}
                    className="hidden lg:flex lg:w-1/4"
                />

                {/* Min Year for SM & MD screen*/}
                {/* Any Engine */}
                <SelectBox
                    name="Any Engine"
                    options={Engine}
                    onChange={handleEngineChange}
                    value={searchDataParams.engine}
                    className="flex lg:hidden w-full"
                />
                {/* Any Color */}
                <SelectBox
                    name="Any Color"
                    options={colors}
                    onChange={handleColorChange}
                    value={searchDataParams.color}
                    className="flex lg:hidden w-full"
                />
                {/* Min Year */}
                <SelectBox
                    name="Min Year"
                    options={MinYears}
                    onChange={handleMinYearChange}
                    value={searchDataParams.minYear}
                    className="flex lg:hidden w-1/2"
                />
                {/* Max Year */}
                <SelectBox
                    name="Max Year"
                    options={MaxYears}
                    onChange={handleMaxYearChange}
                    value={searchDataParams.maxYear}
                    className="flex lg:hidden w-1/2"
                />
                {/*  */}
                {/*  */}

                {/* Min Price */}
                <SelectBox
                    name="Min Price"
                    options={MinPrice}
                    onChange={handleMinPriceChange}
                    value={searchDataParams.minPrice}
                    className="flex w-1/2 lg:w-1/4"
                />
                {/* Max Price */}
                <SelectBox
                    name="Max Price"
                    options={MaxPrice}
                    onChange={handleMaxPriceChange}
                    value={searchDataParams.maxPrice}
                    className="flex w-1/2 lg:w-1/6"
                />
                {/* Min KM */}
                <SelectBox
                    name="Min KM"
                    options={MinMileage}
                    onChange={handleMinMileageChange}
                    value={searchDataParams.minMileage}
                    className="flex w-1/2 lg:w-1/6"
                />
                {/* Max KM */}
                <SelectBox
                    name="Max KM"
                    options={MaxMileage}
                    onChange={handleMaxMileageChange}
                    value={searchDataParams.maxMileage}
                    className="flex w-1/2 lg:w-1/6"
                />
                {/* Any Fuel Type */}
                <SelectBox
                    name="Any Fuel Type"
                    options={FuelType}
                    onChange={handleFuelTypeChange}
                    value={searchDataParams.fuelType}
                    className="flex w-full lg:w-1/4"
                />
                {/* Any Body Style */}
                <SelectBox
                    name="Any Body Style"
                    options={BodyStyle}
                    onChange={handleBodyStyleChange}
                    value={searchDataParams.bodyStyle}
                    className="flex w-full lg:w-1/4"
                />
                {/* KEYWORD SEARCH */}
                <InputBox
                    id="keyword-search"
                    onChange={handleInputSearchBoxChange}
                    value={searchDataParams.searchInput}
                    className="flex w-full lg:w-1/6 p-2"
                    placeHolder="KEYWORD SEARCH"
                />
                {/* Reset */}
                <ButtonBox
                    onClick={handleResetAll}
                    type="button"
                    className="flex w-full lg:w-1/6"
                >
                    Reset
                </ButtonBox>
                {/* SEARCH */}
                <ButtonBox
                    type="button"
                    onClick={handleSearch}
                    className="flex w-full lg:w-1/6"
                >
                    <FaSearch color="#000" size={16} />
                    SEARCH
                </ButtonBox>
            </div>
        </div>
    );
};

export default CarsSearchBox;
