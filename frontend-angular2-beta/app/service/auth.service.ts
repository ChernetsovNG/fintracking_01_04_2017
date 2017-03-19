import {Injectable} from "angular2/core";
import {Token} from "../model/auth.token";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Router} from "angular2/router";
import {User} from "../model/user";
import {Observable} from "rxjs/Rx";
import {ExceptionService} from "./exception.service";
import {basePath, loginPath} from "../shared/config";
import {ProfileService} from "./profile.service";

@Injectable()
export class AuthService {
    private _authenticatedAs: User = null;

    constructor(private http: Http,
                private router: Router,
                private profileService: ProfileService,
                private exceptionService: ExceptionService) {
    }

    login(token: Token): void {

        let headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
        let options = new RequestOptions({
            headers: headers
        });
        this.http.post(basePath + loginPath,
            "username=" + token.login +
            "&password=" + token.password,
            options).map(res => {
            return res;
        }).subscribe(
            res => {
                this.router.navigate(["Users"])
            },
            error => {
                this.exceptionService.onError(error);
            }
        );
    }

    get authenticatedAs(): User {
        return this._authenticatedAs;
    }

    set authenticatedAs(value: User) {
        this._authenticatedAs = value;
    }

    hasAdminRole(): boolean {
        return this._authenticatedAs.roles.includes("ROLE_ADMIN");
    }

    logout() {
        this.http.get(basePath + "/logout").subscribe();
        this._authenticatedAs = null;
    }

    isAuthenticated(): Observable<boolean> {
        if (this._authenticatedAs == null) {
            return this.profileService.getOwnProfile().map(res => {
                this._authenticatedAs = res.json();
                return true;
            }).catch((error: any) => {
                this._authenticatedAs = null;
                this.exceptionService.onError(error);
                return Observable.of(false);
            });
        } else {
            return Observable.of(true);
        }
    }
}