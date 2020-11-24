import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {map} from "rxjs/operators";
import {SubscribleFirestoreService} from "./subscrible.firestore.service";
import {CustomList, List} from './types';
import {CustomLists} from './customizeList';
import subscribledList from './subscrible';

@Component({
  selector: 'app-subscribe-lists',
  templateUrl: './subscribe-lists.component.html',
  styleUrls: ['./subscribe-lists.component.css']
})
export class SubscribeListsComponent implements OnInit {
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  customerLists: CustomList[] = CustomLists;
  sList: subscribledList = new subscribledList();
  subcribleLists: any;

  LISTS = [
    {
      id: "ssjdhhvnlkikikjff",
      currentUserEmail: "huangjingyi85@qq.com",
      currentUser: "abc",
      title: "Games Like Animal Crossing",
      user: "amkasumi",
      description: "Chill games that involve mundane tasks. Can build things, dress up, raise pets, etc. Playtime = infinate."
    },
    {
      id: "ieurhnbvfijhdisdoj",
      currentUserEmail: "huangjingyi85@qq.com",
      currentUser: "abc",
      title: "Best Games For Switch Lite",
      user: "yogataichi34",
      description: "Some games are just waaay better on the regular switch console but these are games where the experience on the Lite is still very comparable."
    },
    {
      id: "kjhgsyugeuuhhuifiuhuhi",
      currentUserEmail: "unknow446@gmail.com",
      currentUser: "abc",
      title: "Fav Gacha Games",
      user: "rageofbahamut404",
      description: "Mainly card-based"
    },
    {
      id: "dfdfdsfdfnhnhn",
      currentUserEmail: "unknow446@gmail.com",
      currentUser: "abc",
      title: "Worst Indie Games of 2020",
      user: "iloveanimalsss01",
      description: "All genres"
    }
  ];


  slists: any;
  submitted = false;
  showDetail = false;
  showTitle = '';
  message = '';

  constructor(private service: SubscribleFirestoreService) { }

  ngOnInit(): void {
    this.retrieveLists();
  }

  retrieveLists = () =>
    this.service
      .getfiles()
      .subscribe(res => (this.subcribleLists = res))

  init(): void {
    //var val = JSON.stringify(this.LISTS);
        for (var i=0; i<this.LISTS.length; i++) {
                 var data = {
                   id : this.LISTS[i].id,
                   currentUserEmail: this.LISTS[i].currentUserEmail,
                  currentUser: this.LISTS[i].currentUser,
                  title: this.LISTS[i].title,
                  user: this.LISTS[i].user,
                  description: this.LISTS[i].description
                }
              console.log(data);

               this.service.create(data).then(() => {
                  console.log('Created new item successfully!');
                  this.submitted = true;
                });

    }


/*    const data = {
      currentUser: "abc",
      title: "Games Like Animal Crossing",
      user: "amkasumi",
      description: "Chill games that involve mundane tasks. Can build things, dress up, raise pets, etc. Playtime = infinate."
    }

    this.service.create(data).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });*/

  }

/*  retrieveLists(): void {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.slists = data;
    });
  }*/


  delete(id: string) {
    //console.log(id);
    this.service.delete(id);
  }




  // get image Urls
  getImgUrl(i:number): string{
    let idx = '';
    idx = i+'';
    return 'assets/images/'+ idx +'.png';
  }

  showDetails(title): void {
      this.showDetail = true;
      this.showTitle = title;
  }

}
