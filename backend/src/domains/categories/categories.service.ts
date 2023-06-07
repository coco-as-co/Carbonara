import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/domains/categories/categories.dto';
import { Category } from 'src/domains/categories/categories.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.find({
      where: {
        deletedAt: null,
      },
    });
  }

  async findOne(id: string): Promise<Category> {
    const data = await this.categoriesRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!data) throw new NotFoundException();

    return data;
  }

  async create(data: CreateCategoryDto): Promise<InsertResult> {
    return this.categoriesRepository.insert(data);
  }

  async update(id: string, data: UpdateCategoryDto): Promise<UpdateResult> {
    await this.findOne(id);
    return this.categoriesRepository.update(id, data);
  }

  async remove(id: string): Promise<DeleteResult> {
    await this.findOne(id);
    return this.categoriesRepository.delete(id);
  }
}
