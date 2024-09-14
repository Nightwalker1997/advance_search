export type carsType = {
    id: number;
    imgsrc: string;
    make: string;
    model: string;
    year: number;
    exterior: string;
    price: number;
    mileage: number;
    fuelType: string;
    bodyStyle: string;
    engineCyl: string;
    driveLine: string;
    doors: number;
    transmission: string;
}[];

export type carType = {
    id: number;
    imgsrc: string;
    make: string;
    model: string;
    year: number;
    exterior: string;
    price: number;
    mileage: number;
    fuelType: string;
    bodyStyle: string;
    engineCyl: string;
    driveLine: string;
    doors: number;
    transmission: string;
};

export type carsSearchParamType = {
    make: string;
    model: string;
    minYear: string;
    maxYear: string;
    engine: string;
    color: string;
    minPrice: string;
    maxPrice: string;
    minMileage: string;
    maxMileage: string;
    fuelType: string;
    bodyStyle: string;
    searchInput: string;
};
