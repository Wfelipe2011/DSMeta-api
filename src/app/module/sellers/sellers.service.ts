import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SellersDto } from './dto/sellers.dto';
import { SellerRepository } from 'src/infra/database/repository/sellers.repository';
import { SellerEntity } from 'src/infra/database/table/sellers.entity';
import { IRequestSellers } from 'src/app/interface/request-sellers.interface';

@Injectable()
export class SellersService {
  constructor(private sellerRepository: SellerRepository) { }

  async findAll(params: IRequestSellers): Promise<SellersDto[]> {
    try {
      const sellers = await this.sellerRepository.findRangeDate(params);
      const sellersDto = this.generateSellersDto(sellers);
      return sellersDto;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(body: SellersDto): Promise<SellersDto> {
    try {
      const seller = await this.sellerRepository.save(body);
      const [sellerDto] = this.generateSellersDto([seller]);
      return sellerDto;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  private generateSellersDto(sellers: SellerEntity[]): SellersDto[] {
    return sellers.map((seller) => {
      return {
        date: seller.date,
        name: seller.name,
        visits: seller.visits,
        sales: seller.sales,
        total: seller.total,
      };
    });
  }
}
