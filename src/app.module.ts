import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/user/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Allows use anywhere without re-importing
    }), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
