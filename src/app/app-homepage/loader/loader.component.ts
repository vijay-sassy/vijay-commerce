import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { LoaderState } from 'src/app/services/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  show =false;
  private subscription : Subscription;
  constructor(private loaderService: LoaderService,private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((state:LoaderState)=>{
      this.show = state.show;
    })
  }
  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.show = false;
  }
}
