import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findeAll() {
    return ['dragons', 'coffee'];
  }
}
