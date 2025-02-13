import { PartialType } from '@nestjs/mapped-types';
import { CreateIntercomDto } from './create-intercom.dto';

export class UpdateIntercomDto extends PartialType(CreateIntercomDto) {}
