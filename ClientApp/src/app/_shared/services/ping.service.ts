import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { concatMap, interval, repeat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingService {
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public pingIpAddress(ipAddress: string) {
    return this.http.post(`${this.baseUrl}Ping/PingIPAddress`, JSON.stringify(ipAddress), this.httpOptions);
  }

  public pingIpAddressRepeat(ipAddress: string) {
    return this.http.post(`${this.baseUrl}Ping/PingIPAddress`, JSON.stringify(ipAddress), this.httpOptions).pipe(
      repeat(4)
    );
  }

  public pingIpAddressContinuously(ipAddress: string) {
    return interval(1000).pipe(
      concatMap(() => this.http.post(`${this.baseUrl}Ping/PingIPAddress`, JSON.stringify(ipAddress), this.httpOptions))
    );
  }
}
