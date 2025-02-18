import { Module } from '@nestjs/common';

import { IntercomModule } from './intercom/intercom.module';


@Module({
  imports: [IntercomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
