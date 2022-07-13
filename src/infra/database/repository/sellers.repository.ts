import { IRequestSellers } from 'src/app/interface/request-sellers.interface';
import { EntityRepository, Repository } from 'typeorm';
import { SellerEntity } from '../table/sellers.entity';

@EntityRepository(SellerEntity)
export class SellerRepository extends Repository<SellerEntity> {
  // eslint-disable-next-line prettier/prettier
  async findRangeDate({ dateFrom, dateTo }: IRequestSellers): Promise<SellerEntity[]> {
    return this.find({
      where: { date: { between: [new Date(dateFrom), new Date(dateTo)] } },
    });
  }
}
