import { CategoryModel } from "./CategoryModel";

export interface ToolModel {
  _id?: string,
  description: string;
  coverUrl: string;
  title: string;
  summary: string;
  categories: CategoryModel[];
  tags: string[];
  isFavorite: boolean;
  url: string;
}

export const fake = {
  "title": "MongoDB Cheat Sheet",
  "summary": "Essential Commands and Operations",
  "coverUrl": "http://localhost:3000/public/covers/www.mongodb.com_developer_products_mongodb_cheat-sheet_.png",
  "url": "https://www.mongodb.com/developer/products/mongodb/cheat-sheet/",
  "isFavorite": false,
  "tags": [],
  "categories": [
    {
      "_id": "671a004b9434592b70361ed0",
      "displayName": "Utilidades",
      "icon": "http://localhost:3000/public/icons/utilities.svg",
      "value": "utilidades"
    }
  ],
  "description": "Accede a una guía rápida que resume los comandos y operaciones esenciales de MongoDB. Este cheat sheet es ideal para desarrolladores y administradores de bases de datos que buscan referencias rápidas para trabajar con MongoDB, incluyendo operaciones de CRUD, consultas, índices y mucho más."
}