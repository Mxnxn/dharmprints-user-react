import { ApiCall } from "./Api";

export const GetCategories = async () => {
    try {
        return await ApiCall("/category/getAll/4");
    } catch (error) {
        return error;
    }
};

export const GetByCategory = async (id) => {
    try {
        return ApiCall(`/product/cat/${id}`);
    } catch (error) {
        return error;
    }
};
