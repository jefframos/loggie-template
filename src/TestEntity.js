import * as PIXI from "pixi.js";

import Layer from "loggie/core/Layer";
import PhysicsEntity from "loggie/core/physics/PhysicsEntity";
import RenderModule from "loggie/core/modules/RenderModule";
import WorldGameView from "loggie/core/view/WorldGameView";
import Loggie from "loggie/core/Loggie";

export default class TestEntity extends PhysicsEntity {
    constructor() {
        super();

        this.gameView = this.addComponent(WorldGameView);

        this.gameView.view = new PIXI.Sprite()
        this.gameView.layer = RenderModule.RenderLayers.FrontLayer

        this.nameLabel = new PIXI.Text('Test')
        this.gameView.view.addChild(this.nameLabel)

        const test = new PIXI.Graphics().beginFill(0xFF0ff0).drawCircle(0, 0, 5)
        this.gameView.view.addChild(test)
    }
    build() {
        super.build();

        this.buildCircle(0, 0, 20)

        this.layerCategory = Layer.Player
        this.layerMask = Layer.PlayerCollision
        console.log('build', this)
    }
    update(delta) {
        super.update(delta)

        this.physics.velocity.x = Math.sin(Loggie.Time) * 5000;
    }

    collisionEnter(target){
        console.log('collide', target)
    }
}