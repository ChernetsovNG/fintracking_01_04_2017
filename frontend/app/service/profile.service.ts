import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {User} from "../model/user";
import {Injectable} from "angular2/core";
import {DateTimeTransformer} from "../shared/date-time.transformer";
import {reqOptions, profilePath, basePath, reqOptionsJson} from "../shared/config";

@Injectable()
export class ProfileService {


    constructor(private http: Http,
                private dateTimeTransformer: DateTimeTransformer) {
    }

    getOwnProfile(): Observable<Response> {
        return this.http.get(basePath + profilePath, reqOptions);
    }

    saveOwnProfle(value: UserModel): Observable<Response> {
        return this.http.put(basePath + profilePath, JSON.stringify(value), reqOptionsJson);
    }
}