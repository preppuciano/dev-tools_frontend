import { CategoryModel } from "../models/CategoryModel";
import { ResponseAPI } from "../models/responseAPI";
import { API_ENDPOINT } from "./config";

export async function getCategories(): Promise<CategoryModel[]> {
  const response = await fetch(`${API_ENDPOINT}/categories`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}

export async function createCategory(data: CreateCategoryFormData): Promise<ResponseAPI<CategoryModel>> {
  console.log('✅', `${API_ENDPOINT}/categories`);
  const formData = new FormData();
  formData.append('displayName', data.displayName);
  if (data.file) {
    formData.append('file', data.file);
  }
  const params = {
    method: "POST",
    body: formData
  }
  const response = await fetch(`${API_ENDPOINT}/categories`, params);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result;
}