import * as PIXI from "pixi.js";

import Layer from "loggie/core/Layer";
import PhysicsEntity from "loggie/core/physics/PhysicsEntity";
import RenderModule from "loggie/core/modules/RenderModule";
import WorldGameView from "loggie/core/view/WorldGameView";

export default class TestEntity extends PhysicsEntity {
    constructor() {
        super();

        this.gameView = new WorldGameView(this);

        this.gameView.view = new PIXI.Sprite()
        //this.gameView.view.anchor.set(0.5, 1)
        //this.gameView.view.scale.set(0.5)
        this.gameView.layer = RenderModule.RenderLayers.FrontLayer

        this.nameLabel = new PIXI.Text('Test')
        this.gameView.view.addChild(this.nameLabel)
        
       // const test = new PIXI.Graphics().beginFill(0xFF0ff0).drawCircle(0, 0, 200)
        //this.gameView.view.addChild(test)
    }
    build() {
        super.build();

        this.buildCircle(0, 0, 20)

        this.layerCategory = Layer.Enemy
        this.layerMask = Layer.EnemyCollision
        console.log('build',this)
    }
    update(delta) {
        super.update(delta)

        this.physics.velocity.x = 1000;

        //console.log(this.gameView.view.x)

        //console.log(this.transform.position)
    }
}