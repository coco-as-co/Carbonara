import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from 'src/domains/categories/categories.controller';
import { Category } from 'src/domains/categories/categories.entity';
import { CategoriesService } from 'src/domains/categories/categories.service';
@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
