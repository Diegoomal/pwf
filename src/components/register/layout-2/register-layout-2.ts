import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'register-layout-2',
    templateUrl: 'register.html'
})
export class RegisterLayout2 {

    @Input() data: any;
    @Input() events: any;

    public password: string;
    public email: string;

    private isEmailValid: boolean = true;
    private isPasswordValid: boolean = true;
    
    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor() { }

    onEvent = (event: string): void => {
        if (event == "onRegister" && !this.validate()) {
            return;
        }
        if (this.events[event]) {
            this.events[event]({
                'email': this.email,
                'password': this.password
                
            });
        }
    }

    validate():boolean {
        this.isEmailValid = true;
        this.isPasswordValid = true;

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);
        
        return this.isEmailValid && 
            this.isPasswordValid;
    }
    
}
