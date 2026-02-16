import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DailyMannaService } from './daily-manna.service';

@Controller('daily-manna')
export class DailyMannaController {
  constructor(private readonly mannaService: DailyMannaService) {}

  @Get('today')
  getToday() {
    return this.mannaService.getToday();
  }

  @Get('all')
  getAll() {
    return this.mannaService.getAll();
  }

  @Get(':date')
  getByDate(@Param('date') date: string) {
    return this.mannaService.getByDate(new Date(date));
  }

  @Post()
  create(@Body() data: any) {
    return this.mannaService.create(data);
  }
}
