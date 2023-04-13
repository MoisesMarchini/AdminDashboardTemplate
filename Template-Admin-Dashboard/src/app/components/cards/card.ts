export interface Card {
  title: string,
  body: string,
}

export interface CardMiniInfo {
  value: string,
  icon: 'up' | 'down' | 'equal',
  color: 'red' | 'green' | 'yellow',
}

export interface CardTable {
  titles: string[],
  objects: any[],
}
