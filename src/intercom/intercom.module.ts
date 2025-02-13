import { Module } from '@nestjs/common';
import { IntercomService } from './intercom.service';
import { IntercomController } from './intercom.controller';

@Module({
  controllers: [IntercomController],
  providers: [IntercomService],
})
export class IntercomModule {}
