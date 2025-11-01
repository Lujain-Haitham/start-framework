import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-contact',
  imports: [TitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  componentName ='CONTACT SECTION'
  isDark = true

  activeName = false
  activeAge = false
  activeEmail = false
  activePassword = false

  showLabel(e:Event) :boolean{
    const input = (e.target as HTMLInputElement)
    if(input.value !==''){
      return true
    }
    else return false
  }
}
