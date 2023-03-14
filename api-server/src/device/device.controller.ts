import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { BaseRepository } from 'src/base/base.repository';
import { DeviceRepository } from './device.repository';
import { DeviceService } from './device.service';
import { Device } from './schemas/device.schema';

@Controller('devices')
export class DeviceController extends BaseController<Device> {
  baseRepository: BaseRepository<Device>;

  constructor(
    private readonly deviceService: DeviceService,
    private readonly deviceRepository: DeviceRepository,
  ) {
    super();
    this.baseRepository = this.deviceRepository;
  }
}
