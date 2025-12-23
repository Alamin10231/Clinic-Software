import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
console.log(baseURL);
export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Another GET method following the same shape

export const gettestmonial = async () => {
  const response = await api.get("clinic/treatments/");
  return response.data;
};

// show working hours
export const getWorkingHours = async () => {
  const response = await api.get("clinic/open_hours/");
  return response.data;
};
// show clinic info
export const getClinicInfo = async () => {
  const resposne = await api.get("clinic/doctors/");
  return resposne.data;
};

// show reviews
export const getReviews = async (page = 1, limit = 15) => {
  const response = await api.get("reviews/rating/", {
    params: { page, limit },
  });
  return response.data;
};
// show reviews post method
export const postReviews = async (reviewData) => {
  const isFormData =
    typeof FormData !== "undefined" && reviewData instanceof FormData;
  const response = await api.post(
    "reviews/rating/",
    reviewData,
    isFormData
      ? { headers: { "Content-Type": "multipart/form-data" } }
      : undefined
  );
  return response.data;
};
export const postContact = async (contactData) => {
  const response = await api.post("reviews/contact/", contactData);
  return response.data;
}