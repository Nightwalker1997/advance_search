import { carsType, carsSearchParamType } from "@/app/types/carsType";
export const onlyUnique = (val: string, index: number, array: string[]) =>
    array.indexOf(val) === index;

export const AnyMake = (cars: carsType) => {
    // string of arrays
    const MakesInCars: string[] = [];
    // extract make from obj in array of cars
    cars.forEach((element) => MakesInCars.push(element.make));
    //find unique ones
    const UniqueCarModels = MakesInCars.filter(onlyUnique);

    return UniqueCarModels;
};

export const AnyModel = (cars: carsType, searchParams: carsSearchParamType) => {
    const { make } = searchParams;
    const ModelsOfCarMake: string[] = [];
    if (make && make.length > 0) {
        cars.forEach((element) => {
            if (element.make === make) ModelsOfCarMake.push(element.model);
        });
        const UniqueCarMakes = ModelsOfCarMake.filter(onlyUnique);
        return UniqueCarMakes;
    } else {
        return ModelsOfCarMake;
    }
};

export const CarsYear = (cars: carsType, searchParams: carsSearchParamType) => {
    const { make, model } = searchParams;
    const carYears: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carYears.push(element.year + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make) carYears.push(element.year + "");
        });
    } else {
        cars.forEach((element) => carYears.push(element.year + ""));
    }

    const UniqueCarYear = carYears.filter(onlyUnique);

    return UniqueCarYear;
};

export const AnyEngine = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    const { make, model } = searchParams;
    const carsEngine: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carsEngine.push(element.engineCyl + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make) carsEngine.push(element.engineCyl + "");
        });
    } else {
        cars.forEach((element) => carsEngine.push(element.engineCyl + ""));
    }
    const UniqueCarEngine = carsEngine.filter(onlyUnique);

    return UniqueCarEngine;
};

export const AnyColor = (cars: carsType, searchParams: carsSearchParamType) => {
    const { make, model } = searchParams;
    const carColors: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carColors.push(element.exterior + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make) carColors.push(element.exterior + "");
        });
    } else {
        cars.forEach((element) => carColors.push(element.exterior + ""));
    }

    const UniqueCarColor = carColors.filter(onlyUnique);

    return UniqueCarColor;
};

export const AnyPrice = (cars: carsType, searchParams: carsSearchParamType) => {
    const { make, model } = searchParams;
    const carsPrice: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carsPrice.push(element.price + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make) carsPrice.push(element.price + "");
        });
    } else {
        cars.forEach((element) => carsPrice.push(element.price + ""));
    }

    const UniqueCarsPrice = carsPrice.filter(onlyUnique);

    return UniqueCarsPrice;
};

export const handMadePrice = () => {
    const maxPrice = 1000000;
    const minPrice = 0;
    const step = 10000;
    const priceArray = Array.from(
        { length: (maxPrice - minPrice) / step + 1 },
        (_, i) => String(minPrice + i * step)
    );

    return priceArray;
};

export const AnyMileage = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    const { make, model } = searchParams;
    const carsMileage: string[] = [];
    if (make && model) {
        if (make.length > 0 && model.length > 0) {
            cars.forEach((element) => {
                if (element.make === make && element.model === model)
                    carsMileage.push(element.mileage + "");
            });
        } else if (make.length > 0 && model.length <= 0) {
            cars.forEach((element) => {
                if (element.make === make)
                    carsMileage.push(element.mileage + "");
            });
        } else {
            cars.forEach((element) => carsMileage.push(element.mileage + ""));
        }
    }
    const UniqueCarsMileage = carsMileage.filter(onlyUnique);

    return UniqueCarsMileage;
};

export const handMadeMileage = () => {
    const maxMileage = 350000;
    const minMileage = 0;
    const step = 30000;
    const priceArray = Array.from(
        { length: (maxMileage - minMileage) / step + 1 },
        (_, i) => String(minMileage + i * step)
    );

    return priceArray;
};
export const AnyFuelType = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    const { make, model } = searchParams;
    const carsFuelType: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carsFuelType.push(element.fuelType + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make) carsFuelType.push(element.fuelType + "");
        });
    } else {
        cars.forEach((element) => carsFuelType.push(element.fuelType + ""));
    }

    const UniqueCarsFuelType = carsFuelType.filter(onlyUnique);

    return UniqueCarsFuelType;
};

export const AnyBodyStyle = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    const { make, model } = searchParams;
    const carsBodyStyke: string[] = [];
    if (make.length > 0 && model.length > 0) {
        cars.forEach((element) => {
            if (element.make === make && element.model === model)
                carsBodyStyke.push(element.bodyStyle + "");
        });
    } else if (make.length > 0 && model.length <= 0) {
        cars.forEach((element) => {
            if (element.make === make)
                carsBodyStyke.push(element.bodyStyle + "");
        });
    } else {
        cars.forEach((element) => carsBodyStyke.push(element.bodyStyle + ""));
    }

    const UniqueCarsBodyStyle = carsBodyStyke.filter(onlyUnique);

    return UniqueCarsBodyStyle;
};
