import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url = "http://localhost:8080/fintracking/rest/admin/users";

	constructor(private _http: Http){
	}

	getUser(userId) {
		return this._http.get(this.getUserUrl(userId))
			.map(res => res.json());
	}

	getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	}

	addUser(user) {
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => res.json());
	}

	updateUser(user) {
		return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
			.map(res => res.json);
	}

	deleteUser(userId) {
		return this._http.delete(this.getUserUrl(userId))
				.map(res => res.json());

	}

	private getUserUrl(userId) {
		return this._url + "/" + userId;
	}
 } 