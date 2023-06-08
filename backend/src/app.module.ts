import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/typeorm.config';
import { AuthModule } from './domains/auth/auth.module';
import { UsersModule } from './domains/users/users.module';
import { QuestsModule } from './domains/quests/quests.module';
import { ArticlesModule } from './domains/articles/articles.module';
@Module({
  imports: [
    DatabaseConfig,
    UsersModule,
    AuthModule,
    QuestsModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
