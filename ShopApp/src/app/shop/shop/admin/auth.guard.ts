import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {

        if(!this.authService.authenticated) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }
}
