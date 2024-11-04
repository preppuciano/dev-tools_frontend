import { ToolModel } from "../models/ToolModel";
import { ResponseAPI } from "../models/responseAPI";
import { API_ENDPOINT } from "./config";

export async function getTools(): Promise<ToolModel[]> {
  const response = await fetch(`${API_ENDPOINT}/tools`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}

export async function getToolsByCategory(category: string): Promise<ToolModel[]> {
  const response = await fetch(`${API_ENDPOINT}/tools/category/${category}`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}

export async function createTool(data: any): Promise<ResponseAPI<ToolModel>> {
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${API_ENDPOINT}/tools`, params);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result;
}

export async function searchTools(query: string): Promise<ToolModel[]> {
  const response = await fetch(`${API_ENDPOINT}/tools/search?q=${query}`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}

export async function getToolCount(): Promise<number> {
  const response = await fetch(`${API_ENDPOINT}/tools/total`);
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
  const result = await response.json();
  return result.data;
}