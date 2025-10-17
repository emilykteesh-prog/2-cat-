namespace SpriteKind {
    export const Coi = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hopes_and_paws.vy == 0) {
        Hopes_and_paws.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coi, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let Coin: Sprite = null
let Hopes_and_paws: Sprite = null
scene.setBackgroundColor(9)
Hopes_and_paws = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . . f f f f f f f f f . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f . f . . f . f . . . 
    . . . . . f . f . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hopes_and_paws, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Hopes_and_paws.ay = 350
scene.cameraFollowSprite(Hopes_and_paws)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    Coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        f 5 5 4 4 4 4 4 5 5 f . . . . . 
        f 5 4 5 5 5 5 5 5 5 f . . . . . 
        f 5 4 5 5 5 5 5 5 5 f . . . . . 
        f 5 4 5 5 5 5 5 5 5 f . . . . . 
        f 5 4 5 5 5 5 5 5 5 f . . . . . 
        f 5 4 5 5 5 5 5 5 5 f . . . . . 
        f 5 5 4 4 4 5 5 5 5 f . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coi)
    tiles.placeOnTile(null, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
