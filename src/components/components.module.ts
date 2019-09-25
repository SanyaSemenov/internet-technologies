import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonErrorComponent } from './common-error/common-error.component';
import { CommonTestComponent } from './common-test/common-test.component';

const routes: Routes = [
	{
		path: '',
		component: CommonTestComponent
	}
]

@NgModule({
	declarations: [CommonErrorComponent, CommonTestComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ComponentsModule {}
