import {Injectable} from "@angular/core";
import {environment} from "../../environments/environments";


@Injectable({
  providedIn: 'root'
})
export abstract class HttpUtils{
  baseUrl(): string {
    return environment.BASE_API_URL;
  }

  baseUrlRemote(): string {
    return environment.BASE_URL_REMOTE;
  }
}
