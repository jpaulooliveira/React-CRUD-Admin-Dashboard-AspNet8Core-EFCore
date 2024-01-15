export interface CategoryFormInput {
   categoryId: number;
   name: string;
   createdAt: string;
}

export interface CategoryGridProps {
   defaultValues: {
      name: string;
      // ... other properties if any
    };
}

export interface CategoryFilterProps {
   defaultValues: {
      name: string;
      // ... other properties if any
    };
    onFilter: (filter: any) => Promise<void>    
}

export interface ICategory {
   categoryId: number;
   name: string;
   createdAt: string;
}