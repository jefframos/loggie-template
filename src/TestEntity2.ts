import * as PIXI from "pixi.js";

import Layer from "loggie/core/Layer";
import PhysicsEntity from "loggie/core/physics/PhysicsEntity";
import RenderModule from "loggie/core/modules/RenderModule";
import WorldGameView from "loggie/core/view/WorldGameView";
import Loggie from "loggie/core/Loggie";
import GameObject from "loggie/core/gameObject/GameObject";
import RigidBody from "loggie/core/physics/RigidBody";

export default class TestEntity2 extends GameObject {
    private gameView: WorldGameView;
    public rigidBody: RigidBody;
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

        //this.buildCircle(0, 0, 20)

        this.rigidBody = this.addComponent(RigidBody) as RigidBody;
        this.rigidBody.buildCircle(20)
        this.rigidBody.layerCategory = Layer.Enemy
        this.rigidBody.layerMask = Layer.EnemyCollision

        console.log('build', this)
    }
    update(delta:number) {
        super.update(delta)

        this.rigidBody.physics.velocity.x = Math.cos(Loggie.Time) * 5000;

        console.log('ADD theck collision events on the gameobject instead the rigidbody')
    }
    collisionEnter(target:GameObject){
        console.log('collide', target)
    }
}