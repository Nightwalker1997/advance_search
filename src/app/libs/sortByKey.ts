import { carsType, carType } from "@/app/types/carsType";

const sortArray = (
    array: carsType,
    key: keyof carType, // Key to sort by
    direction: "asc" | "des" // Sort direction
): carsType => {
    return array.sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        // Handle sorting for numerical values
        if (typeof aValue === "number" && typeof bValue === "number") {
            return direction === "asc" ? aValue - bValue : bValue - aValue;
        }

        // Handle sorting for string values
        if (typeof aValue === "string" && typeof bValue === "string") {
            if (aValue.toLowerCase() < bValue.toLowerCase())
                return direction === "asc" ? -1 : 1;
            if (aValue.toLowerCase() > bValue.toLowerCase())
                return direction === "asc" ? 1 : -1;
            return 0;
        }

        // Handle cases where values are not comparable or are of different types
        return 0;
    });
};

export default sortArray;
