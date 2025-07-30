// jwt.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers['authorization'];

    if (!authHeader) return false;

    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = this.jwtService.verify(token, { secret: 'secretKey123' });
      req['user'] = decoded;
      return true;
    } catch {
      return false;
    }
  }
}
