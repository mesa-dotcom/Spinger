import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PingService } from '../_shared/services/ping.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  public isPinging = false;
  public isContinuous = false;
  public ipTest = '127.0.0.1';
  public resultSubscription: Subscription = new Subscription();
  public resultsDisplay: string[] = [];
  constructor(private _pingService: PingService) { }

  ngOnInit() {
  }

  pingNormally() {
    // this.resultSubscription = this._pingService.pingRepeat(this.ipTest).subscribe({
    //   next: (res: any) => {
    //     this.resultsDisplay.push(res.display);
    //   },
    //   complete: () => {
    //     this.isPinging = false;
    //   },
    // });
  }

  pingContinuously() {
    // this.resultSubscription = this._pingService
    //   .pingContinuously(this.ipTest)
    //   .subscribe((x: any) => {
    //     this.resultsDisplay.push(x.display);
    //   });
  }

  stop() {
    this.isPinging = false;
    this.resultSubscription.unsubscribe();
  }

  clear() {
    this.resultsDisplay = [];
  }

}
