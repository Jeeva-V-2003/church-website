import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Get()
  findAll() {
    return this.publicationService.findAll();
  }

  @Get('magazines')
  findMagazines() {
    return this.publicationService.findByType('magazine');
  }

  @Get('latest')
  findLatest() {
    return this.publicationService.findLatest();
  }

  @Post()
  create(@Body() createPublicationDto: any) {
    return this.publicationService.create(createPublicationDto);
  }
}