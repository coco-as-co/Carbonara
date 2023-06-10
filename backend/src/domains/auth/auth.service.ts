import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/domains/users/users.entity';
import { Repository } from 'typeorm';
import { AuthJwtPayloadDto, AuthLoginDto, AuthRegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthLoginDto): Promise<any> {
    const { email, password } = data;

    const user = await this.usersRepository.findOneBy({ email: email });
    if (!user) throw new NotAcceptableException('could not find the user');

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (user && passwordValid) return user;

    return null;
  }

  async login(user: AuthJwtPayloadDto) {
    const payload: AuthJwtPayloadDto = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: AuthRegisterDto): Promise<any | null> {
    const user = await this.usersRepository.findOne({
      where: { email: data.email },
    });
    if (user) throw new UnauthorizedException();

    data.password = await bcrypt.hash(data.password, 10);
    const res = await this.usersRepository.insert(data);

    const { password, ...userData } = await this.usersRepository.findOne({
      where: { email: data.email },
    });

    return userData;
  }
}
