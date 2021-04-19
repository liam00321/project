sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a a a a a a a a . . . . 
        . . . . a a a a a a a a a a . . 
        . . . . a a a a a a a a a a . . 
        . . . . a a a a a a a a a a . . 
        . . . . a a a a a a a a a a . . 
        . . . . a a a a a a a a a a . . 
        . . . . . a a a a a a a a a . . 
        . . . . . a a a a a a a a . . . 
        . . . . . a a a a a a a a . . . 
        . . . . . a a a a a a a a . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . . a a a . . . . . . . 
        `)
    sprite.setPosition(randint(10, scene.screenWidth()), randint(5, scene.screenHeight()))
    sprite.lifespan = 3000
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.setPosition(randint(20, scene.screenWidth()), randint(15, scene.screenHeight()))
    sprite.x = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setPosition(0, 0)
})
let goodGuy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . 3 3 3 3 3 3 3 . . . 
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite2 = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(goodGuy, 100, 100)
goodGuy.setStayInScreen(true)
