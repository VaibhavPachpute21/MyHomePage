import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import '../../../src/assets/smtp.js';
declare let Email: any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services = [
    {
      title: "Website Development",
      icon: "bi-stack",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    },
    {
      title: "App Development",
      icon: "bi-shield",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    },
    {
      title: "SEO Development",
      icon: "bi-search",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications."
    }
  ]
  projects = [
    {
      title: "News App",
      icon: "bi-stack",
      usedTech: "Flutter,Firebase,News api",
      link: "https://github.com/VaibhavPachpute21/News-Today",
      description: "This is news app which is created using Flutter and APIs are from newsapi.org. This contains login registration reading news,bookmarking,sharing features etc."
    },
    {
      title: "Study Buddy App",
      icon: "bi-stack",
      usedTech: "Flutter,Firebase,Books",
      link: "https://github.com/VaibhavPachpute21/Study-Buddy",
      description: "This application is to help students to get study mateials.This app provides books,notes on more engineering realted stuff."
    },
    {
      title: "Yo-Yo Test App",
      icon: "bi-stack",
      usedTech: "Flutter",
      link: "https://github.com/VaibhavPachpute21/yoyo_test",
      description: "This app is used for yoyo test i.e fitness test for sports like creicket football. This app uses location features and maps user current location."
    },
    {
      title: "e-Commerce App Template",
      icon: "bi-stack",
      usedTech: "Flutter,Firebase,e-Commerce",
      link: "https://github.com/VaibhavPachpute21/bigBasket",
      description: "This app is used for yoyo test i.e fitness test for sports like creicket football. This app uses location features and maps user current location."
    },
    {
      title: "Photography Website With angular",
      icon: "bi-stack",
      usedTech: "HTML,CSS,Angular,Photgraphy",
      link: "https://github.com/VaibhavPachpute21/News-Today",
      description: "This website was made for ViyaFilms.in"
    },
    {
      title: "File converter with Angular",
      icon: "bi-shield",
      usedTech: "HTML,CSS,Angular,node",
      link: "https://github.com/VaibhavPachpute21/FileConverter",
      description: "Web development is the work involved in developing a website for the Internet or an intranet. "
    },
    {
      title: "NewsApp Template with angualar",
      icon: "bi-search",
      usedTech: "HTML,CSS,Angular,news api",
      link: "https://github.com/VaibhavPachpute21/newsWebAngular",
      description: "velopment can range from developing a simple single static page of plain text to complex web applications."
    }
  ]
  sentMSG!:String;
  isEmptyOrSpaces(str: any) {
    return str === null || str.match(/^ *$/) !== null;
  }

  sendMail(name: string, email: string, subject: string, msg: string) {
    if (this.isEmptyOrSpaces(name) || this.isEmptyOrSpaces(email) || this.isEmptyOrSpaces(subject) || this.isEmptyOrSpaces(msg)) {
      alert("Please Enter Reuired Data!")

    } else {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "",
        Password: "",
        To: 'vpachpute22@gmail.com',
        From: email,
        Subject: subject,
        Body: "Name:" + name + "<br/>" + "Subject:" + subject + "<br/>" + msg
      }).then(
        this.router.navigate(['/thankyou!'])
      );

    }
    // console.log(name+"\n"+email+"\n"+subject+"\n"+msg);


  }

  constructor(private router:Router) {  }

  ngOnInit() {


  }

}
