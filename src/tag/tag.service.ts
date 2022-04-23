import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findeAll(): string[] {
    return ['dragons', 'coffee'];
  }
}
