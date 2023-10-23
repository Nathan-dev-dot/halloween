import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs";
import {Mystery} from "./mystery";
import {HttpClient} from "@angular/common/http";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class MysteryService {

  constructor(
    private readonly http: HttpClient,
    private readonly httpUtils: HttpUtils
  ) { }

  private readonly url = this.httpUtils.baseUrl();

  getMystery(code: string): Observable<Mystery>{
    return this.http.get<Mystery>(`${this.url}/mystery/${code}`);
  }

}
