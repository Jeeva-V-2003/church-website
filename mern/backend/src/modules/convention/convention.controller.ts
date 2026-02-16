import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConventionService } from './convention.service';

@Controller('conventions')
export class ConventionController {
  constructor(private readonly conventionService: ConventionService) {}

  @Get()
  findAll() {
    return this.conventionService.findAll();
  }

  @Get('upcoming')
  findUpcoming() {
    return this.conventionService.findUpcoming();
  }

  @Post()
  create(@Body() createConventionDto: any) {
    return this.conventionService.create(createConventionDto);
  }
}