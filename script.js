var GameState = {

  preload: function() {
    this.load.image('sprite', 'dragon.png');
  },

  create: function() {
    this.background = this.game.add.sprite(0, 0, 'sprite');
  }


};

var game = new Phaser.Game(200, 210, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
