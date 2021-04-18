import shuffle from './shuffle'

const puzzleG = {
  ifShuffle: false,
  parts: [{
      img: require('@/assets/puzzle/ass1.jpg'),
      id: 1
    },
    {
      img: require('@/assets/puzzle/ass2.jpg'),
      id: 2
    },
    {
      img: require('@/assets/puzzle/ass3.jpg'),
      id: 3
    },
    {
      img: require('@/assets/puzzle/ass4.jpg'),
      id: 4
    },
    {
      img: require('@/assets/puzzle/ass5.jpg'),
      id: 5
    },
    {
      img: require('@/assets/puzzle/ass6.jpg'),
      id: 6
    },
    {
      img: require('@/assets/puzzle/ass7.jpg'),
      id: 7
    },
    {
      img: require('@/assets/puzzle/ass8.jpg'),
      id: 8
    },
    {
      img: require('@/assets/puzzle/ass9.jpg'),
      id: 9
    },
    {
      img: require('@/assets/puzzle/ass10.jpg'),
      id: 10
    },
    {
      img: require('@/assets/puzzle/ass11.jpg'),
      id: 11
    },
    {
      img: require('@/assets/puzzle/ass12.jpg'),
      id: 12
    },
    {
      img: require('@/assets/puzzle/ass13.jpg'),
      id: 13
    },
    {
      img: require('@/assets/puzzle/ass14.jpg'),
      id: 14
    },
    {
      img: require('@/assets/puzzle/ass15.jpg'),
      id: 15
    },
  ],
  shuffle() {
    if (!this.ifShuffle) {
      this.parts = shuffle(this.parts);
      this.ifShuffle = true;
    }
  }
}

export default puzzleG