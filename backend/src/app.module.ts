import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/typeorm.config';
import { AuthModule } from './domains/auth/auth.module';
import { UsersModule } from './domains/users/users.module';
import { QuestsModule } from './domains/quests/quests.module';
@Module({
  imports: [DatabaseConfig, UsersModule, AuthModule, QuestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
