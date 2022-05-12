import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "Let's Play javascript quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/javascript.jpg',
      },
      {
        id: 'data/asp.net.json',
        name: 'Asp.Net',
        description:
          "Let's Play Asp.Net quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/ASP.NET.png',
      },
      {
        id: 'data/c_sharp.json',
        name: 'C Sharp',
        description:
          "Let's Play C# quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/C_SHARP1.png',
      },
    ];
  }
}
