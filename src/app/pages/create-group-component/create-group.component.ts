import {Component, OnDestroy} from '@angular/core';
import {GroupService} from "../../services/group/group.service";
import {Group} from "../../services/group/group";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-group-component',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnDestroy{

  group: Group = new Group("");
  private readonly subscribers: Subscription[] = []

  constructor(
    private readonly groupService: GroupService,
    private readonly router: Router
  ) { }

  sendGroupName(){
    if(this.group.name.length > 0){
      this.subscribers.push(
          this.groupService.createGroup(this.group).subscribe((group: Group) => {
            localStorage.setItem('GROUP_NAME', this.group.name);
            this.router.navigate(['enigma']);
          })
      );
    }
  }

  setGroupName(groupName: string) {
    if(typeof  groupName == 'string')
      this.group.name = groupName;
  }

  ngOnDestroy(): void {
    this.subscribers.forEach((subscribe: Subscription) => {
      subscribe.unsubscribe();
    })
  }
}
