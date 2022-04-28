import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldhome',
  templateUrl: './oldhome.component.html',
  styleUrls: ['./oldhome.component.css']
})
export class OldhomeComponent implements OnInit {

  services = [
    {
      title: "Website Development",
      icon:"bi-stack",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    },
    {
      title: "App Development",
      icon:"bi-shield",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    },
    {
      title: "SEO Development",
      icon:"bi-search",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    }
  ]
  projects = [
    {
      title: "News App",
      icon:"bi-stack",
      link:"https://github.com/VaibhavPachpute21/News-Today",
      description: "This is news app which is created using Flutter and APIs are from newsapi.org. This contains login registration reading news,bookmarking,sharing features etc."
    },
    {
      title: "Study Buddy App",
      icon:"bi-stack",
      link:"https://github.com/VaibhavPachpute21/Study-Buddy",
      description: "This application is to help students to get study mateials.This app provides books,notes on more engineering realted stuff."
    },
    {
      title: "Yo-Yo Test App",
      icon:"bi-stack",
      link:"https://github.com/VaibhavPachpute21/News-Today",
      description: "This app is used for yoyo test i.e fitness test for sports like creicket football. This app uses location features and maps user current location."
    },
    {
      title: "Photography Website With angular",
      icon:"bi-stack",
      link:"https://github.com/VaibhavPachpute21/News-Today",
      description: "This website was made for ViyaFilms.in"
    },
    {
      title: "File converter with Angular",
      icon:"bi-shield",
      link:"https://github.com/VaibhavPachpute21/FileConverter",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. "
    },
    {
      title: "NewsApp Template with angualar",
      icon:"bi-search",
      link:"https://github.com/VaibhavPachpute21/newsWebAngular",
      description: "velopment can range from developing a simple single static page of plain text to complex web applications."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
