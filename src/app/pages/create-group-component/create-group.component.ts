import {Component, OnDestroy} from '@angular/core';
import {GroupService} from "../../services/group/group.service";
import {Group} from "../../services/group/group";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-group-component',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnDestroy{

  group: Group = new Group("");
  private readonly subscribers: Subscription[] = []

  constructor(private readonly groupService: GroupService) { }

  sendGroupName(){
    if(this.group.name.length > 0){
      this.subscribers.push(
          this.groupService.createGroup(this.group).subscribe((group: Group) => {
            console.log("coucou")
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
