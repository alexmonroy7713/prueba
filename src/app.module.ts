import { Module } from '@nestjs/common';

import { IntercomModule } from './intercom/intercom.module';
import { PruebaModule } from './prueba/prueba.module';

@Module({
  imports: [IntercomModule, PruebaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
