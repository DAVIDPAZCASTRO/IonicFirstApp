import { Component } from '@angular/core';

import { FormPage } from '../form/form';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
