import { Component, OnInit } from '@angular/core';
import { Card, CardMiniInfo, CardTable } from 'src/app/components/cards/card';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardWithHeader: Card = {
    title: 'DashboardPage',
    body: 'Here you will find all the info that you need about your finances.'
  }

  cardMiniInfo: {card: Card, info: CardMiniInfo}[] = [
    {
      card: {
        title: '18.6K',
        body: 'Visitors'
      },
      info: {
        value: '16%',
        icon: 'up',
        color: 'green'
      }
    },
    {
      card: {
        title: '32.9K',
        body: 'Total Pageviews'
      },
      info: {
        value: '51%',
        icon: 'up',
        color: 'green'
      }
    },
    {
      card: {
        title: '54%',
        body: 'Bounce Rate'
      },
      info: {
        value: '24%',
        icon: 'down',
        color: 'red'
      }
    },
    {
      card: {
        title: '2m 56s',
        body: 'Visit Duration'
      },
      info: {
        value: '8%',
        icon: 'up',
        color: 'green'
      }
    },
  ]

  cardTableContent: { card: Card, table: CardTable } = {
    card: {
      title: 'Top Content',
      body: ''
    },
    table: {
      titles: [
        'URL',
        'Views',
        'Uniques'
      ],
      objects: [
        {
          url: '/',
          views: 2500,
          uniques: 2100,
          showProgress: true
        },
        {
          url: '/blog/',
          views: 376,
          uniques: 139,
          showProgress: true
        },
        {
          url: '/reserve/success',
          views: 468,
          uniques: 290,
          showProgress: true
        }
      ]
    }
  }

  cardTableChannels: { card: Card, table: CardTable } = {
    card: {
      title: 'Top Channels',
      body: ''
    },
    table: {
      titles: [
        'URL',
        'Views',
        'Uniques'
      ],
      objects: [
        {
          url: 'Google',
          views: 4200,
          uniques: 3900,
          showProgress: true,
          icon: [
            {
              class: 'fa-brands fa-google',
              bgColor: 'red',
              textColor: 'white'
            }
          ]
        },
        {
          url: 'Github',
          views: 1900,
          uniques: 1509,
          showProgress: true,
          icon: [
            {
              class: 'fa-brands fa-github',
              bgColor: 'black',
              textColor: 'white'
            }
          ]
        },
        {
          url: 'Facebook',
          views: 1500,
          uniques: 986,
          showProgress: true,
          icon: [
            {
              class: 'fa-brands fa-facebook',
              bgColor: 'blue',
              textColor: 'white'
            }
          ]
        },
        {
          url: 'Twitter',
          views: 974,
          uniques: 439,
          showProgress: true,
          icon: [
            {
              class: 'fa-brands fa-twitter',
              bgColor: 'secondary',
              textColor: 'white'
            }
          ]
        }
      ]
    }
  }


  ngOnInit(): void {
  }

}
