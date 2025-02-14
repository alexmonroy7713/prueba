import { Module } from '@nestjs/common';
import { IntercomService } from './intercom.service';
import { IntercomController } from './intercom.controller';
import { IntercomGateway } from './websockets/intercom.gateway';

@Module({
  controllers: [IntercomController],
  providers: [IntercomService, IntercomGateway],
  exports: [IntercomGateway],
})
export class IntercomModule {}
