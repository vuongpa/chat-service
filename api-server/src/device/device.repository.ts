import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { Device } from './schemas/device.schema';

@Injectable()
export class DeviceRepository extends BaseRepository<Device> {
  constructor(
    @InjectModel(Device.name)
    private readonly deviceModel: Model<Device>,
  ) {
    super(deviceModel);
  }
}
