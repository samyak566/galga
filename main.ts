controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 5 b 2 2 1 9 9 . . . . . . . . 
        4 1 b 1 2 2 d d d d d d d . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let Other_sprite: Sprite = null
    Other_sprite.destroy(effects.fire, 500)
    Score += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let Score = 0
let projectile: Sprite = null
let SpacePlane: Sprite = null
SpacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 f f f . . . . . . . . . . 
    . . 4 f 2 2 f f f f f f . . . . 
    . 1 2 d 2 2 2 1 9 9 9 9 f f . . 
    2 4 4 d 2 2 2 1 9 9 9 9 9 f . . 
    . 4 2 d 2 2 2 2 1 2 d d d f d . 
    . 2 4 f 2 2 2 2 2 2 2 2 1 f . . 
    . . 4 f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SpacePlane, 200, 200)
SpacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 1 1 2 b 9 f . . . . . . . 
        . 5 f 1 2 2 b 9 9 f . . . . . . 
        4 2 f 2 2 2 b 9 9 f f f f f f f 
        . 1 f 1 2 2 b 1 1 f . . . . . . 
        . . f 1 2 1 1 1 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(160, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
