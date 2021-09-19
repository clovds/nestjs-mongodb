import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:2717/nest'),
    UsersModule,
  ],
})
export class AppModule {}
