import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { request } from 'http';
import { Observable, switchMapTo } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest();
    console.log("req--->",req);
    
    const authHeader = req.headers['authorization'];
    console.log("authHeader--->",authHeader);
    return authHeader==="secret key";
  }
}
