import httpModule from "../helpers/HttpModule";
import { CategoryFormInput, ICategory } from "../types/GlobalTypes";
export class CategoryService {
  constructor(private categoryEndpoints: {
    LIST: string;
    CREATE: string;
    EDIT: string;
    FIND: string;
  }) { }

  async createCategory(categoryData: {
    name: string;
  }) {
    try {
      const data = {
        //id: uuidv4(),
        name: categoryData.name,
      };

      console.log(data);

      await httpModule.post(this.categoryEndpoints.CREATE, data);
    } catch (error) {
      if (error && error instanceof Error)
        console.log("Error: ", error.message);
      ///else if (err instanceof AxiosError) handleAxiosError(err);
      throw error;
    }
  }

  async editCategory(id: number, categoryData: {
    name: string;
  }) {
    try {
      const data = {
        //id: uuidv4(),
        CategoryId: id,
        name: categoryData.name,
      };

      await httpModule.put(this.categoryEndpoints.EDIT + `/${id}`, data);
    } catch (error) {
      if (error && error instanceof Error)
        console.log("Error: ", error.message);
      ///else if (err instanceof AxiosError) handleAxiosError(err);
      throw error;
    }
  }

  async getCategories(filter: any) {
    try {      

      let params = [];
     
      for (const key in filter) {
        params.push(`${key}=${filter[key]}`);
      }

      const response = await httpModule.get<ICategory[]>(this.categoryEndpoints.LIST + `?${params.join("&")}`);

      return response.data;

    } catch (error) {
      // Handle specific error types if needed
      if (error instanceof Error) {
        console.log("Error: ", error.message);
      } else {
        console.log("Unexpected error: ", error);
      }
      // Rethrow the error if you want to propagate it further
      throw error;
    }
  }

  async getCategory(id: number): Promise<CategoryFormInput> {
    try {
      const response = await httpModule.get<ICategory>(this.categoryEndpoints.FIND + `/${id}`);
      const category: CategoryFormInput = {
        categoryId: response.data.categoryId,
        name: response.data.name,
        createdAt: response.data.createdAt
      };
      return category;
    } catch (error) {
      // Handle errors as needed
      console.error("Error fetching category:", error);
      throw error;
    }
  }

  async deleteCategory(id: number) {
    try {
      await httpModule.delete<ICategory>(this.categoryEndpoints.FIND + `/${id}`);      
    } catch (error) {
      // Handle errors as needed
      console.error("Error fetching category:", error);
      throw error;
    }
  }

}
