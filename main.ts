namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.x += 1
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`1400080000000000000000000000000000000000000000070b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c080e0000000000000000000000000000000000080e1000000000000000000000000000000000080e1018000000000000000000000000000000080e1018180000010103070707080808080909090e1018181600001211111111111111111111111110181516000000131010101010101010101010101816000000`,
            img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.coral0,sprites.builtin.oceanDepths0,sprites.builtin.coral2,sprites.builtin.oceanDepths1,sprites.builtin.oceanDepths2,sprites.builtin.oceanDepths4,sprites.builtin.coral3,sprites.builtin.coral5,sprites.builtin.coral4,sprites.builtin.oceanSand0,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,sprites.builtin.oceanDepths8,sprites.builtin.oceanSand2,sprites.builtin.oceanSand3,sprites.builtin.oceanSand9,sprites.builtin.oceanSand6,sprites.builtin.oceanSand1,sprites.builtin.oceanSand13,sprites.builtin.oceanSand12,sprites.builtin.oceanSand14,sprites.builtin.oceanSand15,sprites.builtin.oceanSand8,sprites.builtin.oceanSand11,sprites.builtin.oceanSand7],
            TileScale.Sixteen
        ))
