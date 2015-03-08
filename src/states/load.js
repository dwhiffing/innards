module.exports = {
  constructor: function() {
    this.loadingSprite = null;
  },

  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.spritesheet('button', 'images/button.png', 193, 71);
    this.load.image('spawner', 'images/spawner.png');
    this.load.image('bullet', 'images/bullet.png');
    this.load.image('gib', 'images/gib.png');
    this.load.image('arrow', 'images/arrow.png');
    this.load.atlasJSONHash('tower2', 'images/tower2.png', 'images/tower.json');
    this.load.image('tower', 'images/tower.png');
    this.load.image('bg', 'images/bg.jpg');
    this.load.image('enemy', 'images/enemy4.png');
    this.load.image('tile', 'images/wall.png');
    this.load.image('wall', 'images/tile.png');
  },

  onLoadComplete: function() {
    game.state.start('play', true, false);
  }
}