import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "1. Birds",
      url: "/chapter1",
      pic: "https://img.icons8.com/dotty/80/000000/bird.png"
    },
    {
      title: "2. Cats",
      url: "/chapter2",
      pic: "https://img.icons8.com/pastel-glyph/64/000000/cat--v3.png"
    },
    {
      title: "3. Dogs",
      url: "/chapter3",
      pic: "https://img.icons8.com/pastel-glyph/64/000000/dog--v2.png"
    },
    {
      title: "4. Fish",
      url: "/chapter4",
      pic: "https://img.icons8.com/carbon-copy/100/000000/fish.png"
    },
    {
      title: "5. Hamsters",
      url: "/chapter5",
      pic: "https://img.icons8.com/dotty/80/000000/hamster-wheel.png"
    },
    {
      title: "6. Iguanas",
      url: "/chapter6",
      pic: "https://img.icons8.com/ios-filled/50/000000/lizard.png"
    },
    {
      title: "7. Lizards",
      url: "/chapter7",
      pic: "https://img.icons8.com/ios/50/000000/lizard.png"
    },
    {
      title: "8. Mice",
      url: "/chapter8",
      pic: "https://img.icons8.com/dotty/80/000000/mouse-animal.png"
    },
    {
      title: "9. Pigs",
      url: "/chapter9",
      pic: "https://img.icons8.com/carbon-copy/100/000000/pig.png"
    },
    {
      title: "10. Pigeons",
      url: "/chapter10",
      pic: "https://img.icons8.com/carbon-copy/100/000000/bird.png"
    },
    {
      title: "11. Rabbits",
      url: "/chapter11",
      pic: "https://img.icons8.com/carbon-copy/100/000000/rabbit.png"
    },
    {
      title: "12. Snakes",
      url: "/chapter12",
      pic: "https://img.icons8.com/dotty/80/000000/year-of-snake.png"
    },
    {
      title: "13. Turtles",
      url: "/chapter13",
      pic: "https://img.icons8.com/carbon-copy/100/000000/turtle.png"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
