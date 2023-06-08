import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentsDto, UpdateCommentsDto } from './comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  public async getAllComments() {
    return await this.commentsService.findAll();
  }

  @Get(':id')
  public async getOneComment(@Param('id', ParseUUIDPipe) id: string) {
    return await this.commentsService.findOne(id);
  }

  @Post()
  public async createComment(@Body() comments: CreateCommentsDto) {
    return await this.commentsService.create(comments);
  }

  @Patch(':id')
  public async updateComment(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() comments: UpdateCommentsDto,
  ) {
    return await this.commentsService.update(id, comments);
  }

  @Delete(':id')
  public async deleteComment(@Param('id', ParseUUIDPipe) id: string) {
    return await this.commentsService.delete(id);
  }
}
