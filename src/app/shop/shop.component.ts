import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent {
  @Input('shop-title') shopTitle!: string;

  products = [
    {
      'id': 0,
      'isSelected': false,
      'title': 'Spoon',
      'price': '3$',
      'picture': 'https://images.unsplash.com/photo-1619367300933-376d8c5cd5f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxfHxzcG9vbnxlbnwwfDB8fHwxNjUzOTE1MTQw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 300
    },

    {
      'id': 1,
      'isSelected': false,
      'title': 'Fork',
      'price': '4$',
      'picture': 'https://images.unsplash.com/photo-1619367300934-373d9adf7dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwzfHxmb3JrfGVufDB8MHx8fDE2NTM5MTUyMDY&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 200
    },

    {
      'id': 2,
      'isSelected': false,
      'title': 'Pan',
      'price': '35$',
      'picture': 'https://images.unsplash.com/photo-1592156328757-ae2941276b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxfHxwYW58ZW58MHwwfHx8MTY1MzkxNzExNw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 43
    },

    {
      'id': 3,
      'isSelected': false,
      'title': 'Knife',
      'price': '10$',
      'picture': 'https://images.unsplash.com/photo-1593618523725-c22aa27d353d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHwxNHx8a25pZmV8ZW58MHwwfHx8MTY1MzkxNTI3MQ&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 500
    },


    {
      'id': 4,
      'isSelected': false,
      'title': 'Pot',
      'price': '25$',
      'picture': 'https://images.unsplash.com/photo-1592156328886-23184f7412e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA3Njh8MHwxfHNlYXJjaHw0fHxwYW58ZW58MHwwfHx8MTY1MzkxNzExNw&ixlib=rb-1.2.1&q=80&w=1080',
      'countInStock': 70
    }

  ]

}
