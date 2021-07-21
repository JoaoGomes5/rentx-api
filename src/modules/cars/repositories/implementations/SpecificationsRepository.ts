import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  index(): Specification[] {
    return this.specifications;
  }

  save({ name, description }: ICreateCategoryDTO): void {
    const category = new Specification();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(category);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
