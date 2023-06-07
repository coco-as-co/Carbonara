import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDtoWrapper,
} from 'src/domains/categories/categories.dto';
import { Category } from 'src/domains/categories/categories.entity';
import { CategoriesService } from 'src/domains/categories/categories.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(data: CreateCategoryDto): Promise<InsertResult> {
    return this.categoriesService.create(data);
  }

  @Patch(':id')
  update(data: UpdateCategoryDtoWrapper): Promise<UpdateResult> {
    return this.categoriesService.update(data.id, data.body);
  }

  @Delete(':id')
  remove(id: string): Promise<DeleteResult> {
    return this.categoriesService.remove(id);
  }
}
