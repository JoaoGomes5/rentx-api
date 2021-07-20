import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description : string;
}

class CreateSpecificationService {
    constructor(
      private specificationsRepository: ISpecificationsRepository
    ){}

    execute({ name, description } : IRequest): void  {
      const specificationAlreadyExists = this.specificationsRepository.findByName(name);

      if(specificationAlreadyExists){
        throw new Error('Category already exists')
      }
      
      this.specificationsRepository.create({ name, description })
    }
}

export {
  CreateSpecificationService
}