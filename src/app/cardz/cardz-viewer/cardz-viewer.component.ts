import {Component, OnInit} from '@angular/core';
import {Cardz} from "../../shared/types/cardz";
import {AnimationClasses} from "../../shared/types/animation-classes";
import {SocialMediaIcon} from "../../shared/types/social-media-icon";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CardzService } from 'src/app/shared/data-access/cardz.service';


@Component({
  selector: 'app-cardz-viewer',
  templateUrl: './cardz-viewer.component.html',
  styleUrls: ['./cardz-viewer.component.scss']
})

export class CardzViewerComponent implements OnInit {
  
  userCard$? : Observable<Cardz>;

  constructor(private cardzService: CardzService){
      
  }

  ngOnInit(): void {
    this.userCard$ = this.cardzService.getCardzById(1);

  }

  // userCard: Cardz = {
  //   name: 'Rudy Evrard',
  //   biography: 'I am a software developer',
  //   avatar: 'url(assets/avatar.jpg)',
  //   animation: AnimationClasses.FADE_IN_LEFT,
  //   background: {
  //     image: 'url(assets/background.jpg)',
  //     animation: AnimationClasses.FADE_IN
  //   },
  //   links: [
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.GITHUB,
  //     },
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.BEHANCE,
  //     },
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.INSTAGRAM,
  //     },
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.GITHUB,
  //     },
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.BEHANCE,
  //     },
  //     {
  //       url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
  //       text: 'Visitez mon Github pour des projets sympas!',
  //       icon: SocialMediaIcon.INSTAGRAM,
  //     }
  //   ]
  // };

}
