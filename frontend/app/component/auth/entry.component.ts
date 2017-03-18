import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {AuthService} from "../../service/auth.service";

@Component({
    templateUrl: '../../html/entry.html'
})
export class EntryComponent implements OnInit {
    loginForm: ControlGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private  _authService: AuthService) {
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}



