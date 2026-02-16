import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getAll() {
    return this.eventsService.getAll();
  }

  @Get('upcoming')
  getUpcoming() {
    return this.eventsService.getUpcoming();
  }

  @Get('past')
  getPast() {
    return this.eventsService.getPast();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.eventsService.getById(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.eventsService.create(data);
  }
}
