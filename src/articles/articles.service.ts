import { PrismaService } from '@app/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with id ${id} does not exist`);
    }
    return article;
  }

  create(dto: CreateArticleDto) {
    return this.prisma.article.create({ data: dto });
  }

  update(id: number, dto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    this.prisma.article.delete({ where: { id } });
  }
}
