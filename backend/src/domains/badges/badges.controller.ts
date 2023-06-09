import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { BadgesService } from './badges.service';
import { CreateBadgeDto, UpdateBadgeDto } from './badges.dto';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Get()
  public async getAllBadges() {
    return await this.badgesService.findAll();
  }

  @Get(':id')
  public async getOneBadge(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error("Le badge n'existe pas");
    return await this.badgesService.findOne(id);
  }

  @Post()
  public async createBadge(@Body() badge: CreateBadgeDto) {
    return await this.badgesService.create(badge);
  }

  @Patch(':id')
  public async updateBadge(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() badge: UpdateBadgeDto,
  ) {
    if (!id) throw new Error("Le badge n'existe pas");
    return await this.badgesService.update(id, badge);
  }

  @Delete(':id')
  public async deleteBadge(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) throw new Error('Badge id not provided');
    return await this.badgesService.delete(id);
  }
}
