import { Component } from '@angular/core';
import {Cardz} from "../../shared/types/cardz";
import {AnimationClasses} from "../../shared/types/animation-classes";
import {SocialMediaIcon} from "../../shared/types/social-media-icon";

@Component({
  selector: 'app-cardz-customization',
  templateUrl: './cardz-customization.component.html',
  styleUrls: ['./cardz-customization.component.scss']
})
export class CardzCustomizationComponent {

  userCard: Cardz = {
    id : 1,
    name: 'Rudy Evrard',
    biography: 'I am a software developer',
    avatar: 'url(assets/avatar.jpg)',
    animation: AnimationClasses.FADE_IN_LEFT,
    background: {
      image: 'url(assets/background.jpg)',
      animation: AnimationClasses.FADE_IN
    },
    links: [
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.GITHUB,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.BEHANCE,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.INSTAGRAM,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.GITHUB,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.BEHANCE,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.INSTAGRAM,
      }
    ]
  }
}
