import {Injectable} from '@angular/core';
import {HttpUtils} from "../../utils/http.utils";
import {HttpClient} from "@angular/common/http";
import {Group} from "./group";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GroupService {

  constructor(
    private readonly http: HttpClient,
    private readonly httpUtils: HttpUtils,
  ) {}

  private readonly url: string = this.httpUtils.baseUrl();

  createGroup(group: Group): Observable<Group> {
    const body = JSON.stringify(group);
    return this.http.post<Group>(this.url, body)
  }
}
