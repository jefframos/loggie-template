import * as PIXI from 'pixi.js';

import Loggie from 'loggie/core/Loggie';
import PerspectiveCamera from 'loggie/core/PerspectiveCamera';
import RenderModule from 'loggie/core/modules/RenderModule';
import Screen from "loggie/screenManager/Screen";
import TestEntity from '../TestEntity';
import Vector3 from 'loggie/core/gameObject/Vector3';
import TestEntity2 from '../TestEntity2';

export default class TestScreen extends Screen {

    private container: PIXI.Container = new PIXI.Container()
    private gameplayContainer: PIXI.Container = new PIXI.Container()
    private effectsContainer: PIXI.Container = new PIXI.Container()
    private uiContainer: PIXI.Container = new PIXI.Container()
    private loggie: Loggie = new Loggie();

    constructor(screenName: string) {
        super(screenName);

        this.addChild(this.container);

        const test = new PIXI.Graphics().beginFill(0xFF0000).drawCircle(0, 0, 200)
        //this.addChild(test)

        this.container.addChild(this.gameplayContainer)
        this.container.addChild(this.effectsContainer)
        this.container.addChild(this.uiContainer)



        this.loggie.addGameObject(new RenderModule(this.gameplayContainer, this.uiContainer, this))
        //this.inputModule = this.loggie.addGameObject(new InputModule(this))
        //this.effectsManager = this.loggie.addGameObject(new EffectsManager(this.effectsContainer, this.gameplayContainer))
        this.camera = this.loggie.addCamera(new PerspectiveCamera())

        this.camera.setFollowPoint(new Vector3())

    }
    build(param) {
        super.build();
        this.loggie.start();
        //this.worldRender = this.gameEngine.addGameObject(new EnvironmentManager());
        // this.map = this.gameEngine.poolGameObject(BaseMap, true)


        let entity = this.loggie.poolGameObject(TestEntity, true)
        entity.x = 200
        entity.z = 200
        let entity2 = this.loggie.poolGameObject(TestEntity2, true) as TestEntity2
        entity2.rigidBody.x = 500
        entity2.rigidBody.z = 200

        this.camera.setFollowPoint(entity)

        //     var local = this.gameplayContainer.toLocal(position)
        //     entity.x = local.x
        //     entity.z = local.y

        // this.map.onMapUp.add((position) => {
        //     let entity = this.gameEngine.poolGameObject(BaseUnit, true)

        //     var local = this.gameplayContainer.toLocal(position)
        //     entity.x = local.x
        //     entity.z = local.y
        // })

        // this.camera.setFollowPoint(this.map.mapCenter)
    }
    update(delta) {
        const timeScale = 1.25

        // if (this.map) {
        //     var zoom = Utils.scaleToFitDimensions(this.map.dimensions, Game.Borders)
        //     this.camera.targetZoom = zoom

        //     this.camera.setFollowPoint(this.map.mapCenter)

        // }

        this.camera.targetZoom = 1

        const debugTimeScale = 1//Game.Debug.timeScale | 1
        const scaledTime = delta * debugTimeScale * timeScale;
        delta *= debugTimeScale;
        // this.loggie.update(scaledTime, delta * debugTimeScale)
        //console.log(delta)
        this.loggie.update(delta, delta)

    }

    // transitionOut(nextScreen, params) {
    //     this.nextScreen = nextScreen;
    //     super.transitionOut(nextScreen, params,0.1);
    // }

}