import { Controller, Get, Post, Body } from '@nestjs/common';
import { BibleStudyService } from './bible-study.service';

@Controller('bible-study')
export class BibleStudyController {
  constructor(private readonly bibleStudyService: BibleStudyService) {}

  @Get()
  findAll() {
    return this.bibleStudyService.findAll();
  }

  @Get('latest')
  findLatest() {
    return this.bibleStudyService.findLatest();
  }

  @Post()
  create(@Body() createBibleStudyDto: any) {
    return this.bibleStudyService.create(createBibleStudyDto);
  }
}