import {
  Body,
  Controller,
  Get,
  Post,
  Query
} from '@nestjs/common';
import { SellersService } from './sellers.service';
import { IRequestSellers } from 'src/app/interface/request-sellers.interface';
import { SellersDto } from './dto/sellers.dto';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) { }

  @Get()
  async findAll(@Query() params: IRequestSellers): Promise<SellersDto[]> {
    return await this.sellersService.findAll(params);
  }

  @Post()
  async create(@Body() body: SellersDto): Promise<SellersDto> {
    return await this.sellersService.create(body);
  }
}
