import apple from './assets/apple.svg'
import applePath from './assets/apple-path.svg'
import applePathDull from './assets/apple-path-dull.svg'
import tesla from './assets/tesla.svg'
import teslaPath from './assets/tesla-path.svg'
import teslaPathDull from './assets/tesla-path-dull.svg'
import spy from './assets/spy.png'
import spyPath from './assets/spy-path.svg'
import spyPathDull from './assets/spy-path-dull.svg'
import amazon from './assets/amazon.png'
import amazonPath from './assets/amazon-path.svg'
import amazonPathDull from './assets/amazon-path-dull.svg'

import ckadera from './assets/ckadera.png'
import kevin from './assets/kevin.png'

export const trendingTickers = [
  {
    logo: apple,
    ticker: 'AAPL',
    name: 'Apple Inc',
    graph: applePath,
    graphDull: applePathDull,
    alerts: 15,
    percentage: 64,
    bullish: true,
  },
  {
    logo: tesla,
    ticker: 'TSLA',
    name: 'Tesla, Inc.',
    graph: teslaPath,
    graphDull: teslaPathDull,
    alerts: 12,
    percentage: 55,
    bullish: true,
  },
  {
    logo: spy,
    ticker: 'SPY',
    name: 'S&P 500 Index',
    graph: spyPath,
    graphDull: spyPathDull,
    alerts: 7,
    percentage: 64,
    bullish: false,
  },
  {
    logo: amazon,
    ticker: 'AMZN',
    name: 'Amazon.com',
    graph: amazonPath,
    graphDull: amazonPathDull,
    alerts: 17,
    percentage: 55,
    bullish: true,
  },
  {
    logo: apple,
    ticker: 'AAPL',
    name: 'Apple Inc',
    graph: applePath,
    graphDull: applePathDull,
    alerts: 15,
    percentage: 55,
    bullish: true,
  },
  {
    logo: apple,
    ticker: 'AAPL',
    name: 'Apple Inc',
    graph: applePath,
    graphDull: applePathDull,
    alerts: 15,
    percentage: 64,
    bullish: true,
  },
  {
    logo: tesla,
    ticker: 'TSLA',
    name: 'Tesla, Inc.',
    graph: teslaPath,
    graphDull: teslaPathDull,
    alerts: 12,
    percentage: 55,
    bullish: true,
  },
  {
    logo: spy,
    ticker: 'SPY',
    name: 'S&P 500 Index',
    graph: spyPath,
    graphDull: spyPathDull,
    alerts: 7,
    percentage: 64,
    bullish: false,
  },
  {
    logo: amazon,
    ticker: 'AMZN',
    name: 'Amazon.com',
    graph: amazonPath,
    graphDull: amazonPathDull,
    alerts: 17,
    percentage: 55,
    bullish: true,
  },
  {
    logo: apple,
    ticker: 'AAPL',
    name: 'Apple Inc',
    graph: applePath,
    graphDull: applePathDull,
    alerts: 15,
    percentage: 55,
    bullish: true,
  },
]

export const tableData = {
  headers: [
    'Trader',
    'Trade',
    'Strategy type',
    'Open / close',
    'Profit / loss',
    'Actions',
  ],
  alerts: [
    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Bought AAPL shares',
        amount: '@ $210.22',
        logo: apple,
      },
      strategyType: [
        'Momentum',
        'Lotto',
        'Momentum',
        'Lotto',
        'Momentum',
        'Lotto',
        'Momentum',
        'Momentum',
        'Lotto',
      ],
      opened: '02/22/21',
      closed: false,
      profit: ['Up', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 37,
      },
    },
    {
      trader: {
        name: 'Kevin (momentum)',
        handle: 'kevin',
        avatar: kevin,
        number: 67,
      },
      trade: {
        title: 'Sold SPY put 08/18/21',
        amount: '@ $210.22',
        logo: spy,
      },
      strategyType: ['Day', 'Momentum', 'Lotto', 'Momentum'],
      opened: '08/21/21',
      closed: '8:13 AM',
      profit: ['Made', '16%'],
      actions: {
        likes: 37,
        bookmarks: 7,
        comments: 37,
      },
    },
    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Sold TSLA call 08/18/21',
        amount: '@ $210.22',
        logo: tesla,
      },
      strategyType: ['Day', 'Lotto', 'Momentum', 'Lotto', 'Momentum'],
      opened: 'Yesterday',
      closed: false,
      profit: ['Down', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 0,
      },
    },
    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Sold AMZN 08/18/21',
        amount: '@ $210.22',
        logo: amazon,
      },
      strategyType: ['Swing'],
      opened: 'Yesterday',
      closed: false,
      profit: ['Lost', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 37,
      },
    },
    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Bought AAPL shares',
        amount: '@ $210.22',
        logo: apple,
      },
      strategyType: [
        'Momentum',
        'Lotto',
        'Momentum',
        'Lotto',
        'Momentum',
        'Lotto',
        'Momentum',
        'Momentum',
        'Lotto',
      ],
      opened: '02/22/21',
      closed: false,
      profit: ['Up', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 37,
      },
    },

    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Sold TSLA call 08/18/21',
        amount: '@ $210.22',
        logo: tesla,
      },
      strategyType: ['Day', 'Lotto', 'Momentum', 'Lotto', 'Momentum'],
      opened: 'Yesterday',
      closed: false,
      profit: ['Down', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 0,
      },
    },
    {
      trader: {
        name: 'Kevin (momentum)',
        handle: 'kevin',
        avatar: kevin,
        number: 67,
      },
      trade: {
        title: 'Sold SPY put 08/18/21',
        amount: '@ $210.22',
        logo: spy,
      },
      strategyType: ['Day', 'Momentum', 'Lotto', 'Momentum'],
      opened: '08/21/21',
      closed: '8:13 AM',
      profit: ['Made', '16%'],
      actions: {
        likes: 37,
        bookmarks: 7,
        comments: 37,
      },
    },
    {
      trader: {
        name: 'CKadera',
        handle: 'ckadera',
        avatar: ckadera,
        number: 87,
      },
      trade: {
        title: 'Sold AMZN 08/18/21',
        amount: '@ $210.22',
        logo: amazon,
      },
      strategyType: ['Swing'],
      opened: 'Yesterday',
      closed: false,
      profit: ['Lost', '4%'],
      actions: {
        likes: 24,
        bookmarks: 7,
        comments: 37,
      },
    },
  ],
}
