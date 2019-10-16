import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckApiService } from './chuck-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [ChuckApiService]
})
export class ChuckApiModule {}
