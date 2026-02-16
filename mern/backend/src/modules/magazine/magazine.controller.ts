import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MagazineService } from './magazine.service';

@Controller('magazines')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}

  @Get()
  getAll() {
    return this.magazineService.getAll();
  }

  @Get('latest')
  getLatest() {
    return this.magazineService.getLatest();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.magazineService.getById(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.magazineService.create(data);
  }
}
