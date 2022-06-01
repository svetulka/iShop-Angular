import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shopTitle = 'iShop-Angular';
  
  products = [
    {
      'title': 'Spoon',
      'price': '3$',
      'picture': 'https://images.unsplash.com/photo-1619367300933-376d8c5cd5f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxfHxzcG9vbnxlbnwwfDB8fHwxNjUzOTE1MTQw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 300
    },

    {
      'title': 'Fork',
      'price': '4$',
      'picture': 'https://images.unsplash.com/photo-1619367300934-373d9adf7dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwzfHxmb3JrfGVufDB8MHx8fDE2NTM5MTUyMDY&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 200
    },

    {
      'title': 'Pan',
      'price': '35$',
      'picture': 'https://images.unsplash.com/photo-1592156328757-ae2941276b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxfHxwYW58ZW58MHwwfHx8MTY1MzkxNzExNw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 43
    },

    {
      'title': 'Knife',
      'price': '10$',
      'picture': 'https://images.unsplash.com/photo-1593618523725-c22aa27d353d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxNHx8a25pZmV8ZW58MHwwfHx8MTY1MzkxNTI3MQ&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 500
    },


    {
      'title': 'Pot',
      'price': '25$',
      'picture': 'https://images.unsplash.com/photo-1592156328886-23184f7412e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHw0fHxwYW58ZW58MHwwfHx8MTY1MzkxNzExNw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 70
    }

  ]
}