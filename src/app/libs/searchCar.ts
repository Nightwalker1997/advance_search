import { carsType, carsSearchParamType } from "@/app/types/carsType";

export const SearchByInput = (cars: carsType, searchValue: string) => {
    const carsFoundInSearchByInput: carsType = [];
    const lowerSearchValue = searchValue.toLowerCase();
    cars.forEach((element) => {
        const containsSearchValue = Object.values(element).some((val) => {
            // Convert value to string and then to lowercase
            const newVal = val.toString().toLowerCase();
            return newVal.includes(lowerSearchValue);
        });

        if (containsSearchValue) {
            carsFoundInSearchByInput.push(element);
        }
    });

    return carsFoundInSearchByInput;
};

export const SearchBySelectors = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    return cars.filter((car) => {
        const makeMatches =
            searchParams.make.length > 0
                ? car.make
                      .toLowerCase()
                      .includes(searchParams.make.toLowerCase())
                : true;
        const modelMatches =
            searchParams.model.length > 0
                ? car.model
                      .toLowerCase()
                      .includes(searchParams.model.toLowerCase())
                : true;
        const yearMatches =
            searchParams.minYear.length > 0 && searchParams.maxYear.length > 0
                ? car.year >= parseInt(searchParams.minYear, 10) &&
                  car.year <= parseInt(searchParams.maxYear, 10)
                : true;
        const priceMatches =
            searchParams.minPrice.length > 0 && searchParams.maxPrice.length > 0
                ? car.price >= parseFloat(searchParams.minPrice) &&
                  car.price <= parseFloat(searchParams.maxPrice)
                : true;
        const mileageMatches =
            searchParams.minMileage.length > 0 &&
            searchParams.maxMileage.length > 0
                ? car.mileage >= parseFloat(searchParams.minMileage) &&
                  car.mileage <= parseFloat(searchParams.maxMileage)
                : true;
        const fuelTypeMatches =
            searchParams.fuelType.length > 0
                ? car.fuelType
                      .toLowerCase()
                      .includes(searchParams.fuelType.toLowerCase())
                : true;
        const bodyStyleMatches =
            searchParams.bodyStyle.length > 0
                ? car.bodyStyle
                      .toLowerCase()
                      .includes(searchParams.bodyStyle.toLowerCase())
                : true;
        const searchInputMatches =
            searchParams.searchInput.length > 0
                ? Object.values(car).some((value) =>
                      value
                          .toString()
                          .toLowerCase()
                          .includes(searchParams.searchInput.toLowerCase())
                  )
                : true;

        return (
            makeMatches &&
            modelMatches &&
            yearMatches &&
            priceMatches &&
            mileageMatches &&
            fuelTypeMatches &&
            bodyStyleMatches &&
            searchInputMatches
        );
    });
};

export const SearchCars = (
    cars: carsType,
    searchParams: carsSearchParamType
) => {
    let carsFindedInSearch: carsType = [];

    if (searchParams.searchInput.length > 0) {
        carsFindedInSearch = SearchByInput(cars, searchParams.searchInput);
    } else {
        carsFindedInSearch = SearchBySelectors(cars, searchParams);
    }

    return carsFindedInSearch;
};
