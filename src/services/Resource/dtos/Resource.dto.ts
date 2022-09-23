interface IResourceDto {
  id: number;
  professionalId: number;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResourceBodyDto {
  title: string;
  category: string;
}

export interface IResponseResourceListDto {
  data: {
    resource?: IResourceDto[];
  };
  message: string;
}

