import axiosClient from "../api/axiosClient";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export const OnBoardingOwnerDetailsStore = async(values: any) => {
    try {
        const response = await axiosClient.post(API_ENDPOINTS.onboarding.storeOwner, values);

        return response?.data?.data;
    } catch (error) {
        throw error;
    }
}