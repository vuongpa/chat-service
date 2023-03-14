import { FilterQuery, Model, ProjectionType, QueryOptions } from 'mongoose';
import { BaseEntity } from './base.schema';

export interface PramsQuery<S extends BaseEntity> {
  filter?: FilterQuery<S>;
  field?: ProjectionType<S>;
  options?: QueryOptions<S>;
  populate?: string | string[];
}

export class BaseRepository<S extends BaseEntity> {
  constructor(public readonly model: Model<S>) {}

  async create(doc): Promise<any> {
    const createdEntity = new this.model(doc);
    return await createdEntity.save();
  }

  async findById(id: string, option?: QueryOptions): Promise<S> {
    return this.model.findById(id, option);
  }

  async find(params?: PramsQuery<S>): Promise<S[]> {
    return this.model
      .find(params?.filter, params?.field, params?.options)
      .populate(params?.populate);
  }

  async findOne(params?: PramsQuery<S>): Promise<any> {
    return this.model
      .findOne(params?.filter, params?.field, params?.options)
      .populate(params?.populate);
  }

  async findAll(): Promise<S[]> {
    return this.model.find();
  }

  async aggregate(option: any) {
    return this.model.aggregate(option);
  }

  async populate(result: S[], option: any) {
    return await this.model.populate(result, option);
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id } as FilterQuery<S>);
  }

  async deleteMany(id: string[]) {
    return this.model.deleteMany({ _id: { $in: id } } as FilterQuery<S>);
  }

  async deleteByCondition(filter) {
    return this.model.deleteMany(filter);
  }

  async findByConditionAndUpdate(filter, update) {
    return this.model.findOneAndUpdate(filter as FilterQuery<S>, update);
  }

  async updateMany(filter, update, option?: any | null) {
    return this.model.updateMany(filter, update, option);
  }

  async findByIdAndUpdate(id, update) {
    return this.model.findByIdAndUpdate(id, update);
  }
}
