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

export const OnBoardingUploadStorePhoto = async (values: any) => {
    try {
        const response = await axiosClient.post(API_ENDPOINTS.upload.doc, values, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log("Response comes form API",response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
}