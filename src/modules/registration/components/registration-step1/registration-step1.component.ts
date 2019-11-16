import { Component, OnInit } from '@angular/core';
import {
	Validators,
	FormGroup,
	FormBuilder
} from '@angular/forms';
import * as constants from '../../constants/index';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registration-step1',
	templateUrl: './registration-step1.component.html',
	styleUrls: ['./registration-step1.component.less']
})
export class RegistrationStep1Component implements OnInit {
	constructor(
		private fb: FormBuilder,
		private router: Router) {
		this.buildForm();
	}
	public form: FormGroup;

	private buildForm() {
		this.form = this.fb.group({
			fullName: [
				'',
				[
					Validators.required,
					Validators.pattern(constants.fullNameRegex)
				]
			],
			email: [
				'',
				[Validators.required, Validators.pattern(constants.emailRegex)]
			],
			password: [
				'',
				[
					Validators.required,
					Validators.pattern(constants.passwordRegex)
				]
			]
		});
	}

	ngOnInit() {}

	public submit() {
		if (this.form.invalid) {
			console.log(this.form);
			return;
		}
		this.router.navigate(['registration/step2']);
	}
}
