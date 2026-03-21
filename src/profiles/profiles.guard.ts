import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Sample Authentication
    // will only return true, if body has 'password' key with value 'kekw'
    if(request.body.password == 'kekw'){
      return true;
    }

    return false;
  }
}
