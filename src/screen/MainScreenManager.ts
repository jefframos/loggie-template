import * as PIXI from 'pixi.js';

import Screen from 'loggie/screenManager/Screen';
import ScreenManager from 'loggie/screenManager/ScreenManager';
import TestScreen from './TestScreen';

export default class MainScreenManager extends ScreenManager {
    private screenContainer: PIXI.Container = new PIXI.Container();

    private testScreen: Screen;
    constructor() {
        super();
        //this.screensContainer = Game.ScreenManagerContainer;
        this.addChild(this.screenContainer);
        
        
        //this.addChild(test);


       // this.screenContainer.addChild(test)

        this.testScreen = new TestScreen('test');
        this.addScreen(this.testScreen);
        this.timeScale = 1;

        this.forceChange('test');
        // const urlParams = new URLSearchParams(window.location.search);
        // if (urlParams) {

        //     urlParams.forEach((value, key) => {
        //         console.log(value, key);
        //         Game.Debug[key] = parseFloat(value)
        //     })
        // }





        // this.settings = {
        //     fps: 60
        // }
        // window.GUI = new dat.GUI({ closed: false });
        // window.GUI.add(this.settings, 'fps', 1, 120).listen();

        // this.backgroundContainer = new PIXI.Container();
        // this.addChild(this.backgroundContainer);
        // this.setChildIndex(this.backgroundContainer, 0);

        // this.gameplayScreen = new ArenaScreen(MainScreenManager.Screens.ArenaScreen, MainScreenManager.ScreensTarget.GameplayContainer);
        // this.addScreen(this.gameplayScreen);

        // this.timeScale = 1;       

        // //debug list
        // // noEnemy
        // // char - int
        // // debug
        // // builder
        // // game   
        // //noTransition
        // if (Game.Debug.noTransition || true){
        //     MainScreenManager.Transition.timeIn = 1
        //     MainScreenManager.Transition.timeOut = 1
        //     MainScreenManager.Transition.transitionTimer = 0
        // }
        // // if (Game.Debug.builder) {
        // //     this.forceChange(MainScreenManager.Screens.CharacterBuild);
        // // } else if (Game.Debug.game) {
        // //     this.forceChange(MainScreenManager.Screens.GameScreen);
        // // } else if (Game.Debug.debugMenu) {
        // //     this.forceChange(MainScreenManager.Screens.MainMenu);
        // // }


        // this.isPaused = false;

        // window.onAdds.add(() => {
        //     this.isPaused = true;
        // })

        // window.onStopAdds.add(() => {
        //     this.isPaused = false;
        // })


        // // this.screenTransition.x = config.width/2;

        // if (!Game.Debug.debug) {
        //     window.GUI.hide()
        // }

        // Game.Instance.onAspectChanged.add((isPortrait) => {
        //     this.aspectChange(isPortrait)
        // })

        // this.screenTransition = new ScreenTransition();
        // Game.TransitionContainer.addChild(this.screenTransition)

        // this.screenTransition.x = 0
        // this.screenTransition.y = 0
        // this.screenTransition.transitionOut(0, true);

        // this.forceChange(MainScreenManager.Screens.ArenaScreen);


    }

    forceChange(screenLabel, param) {

        super.forceChange(screenLabel, param);
    }
    change(screenLabel, param) {

        super.change(screenLabel, param);

    }
    startTransitionInTo(screen) {
        //console.log("startTransitionInTo", screen.label)
       // this.screenTransition.transitionOut();

    }
    startTransitionOutTo(screen, nextScreen) {
        //console.log("startTransitionOutTo", screen.label, nextScreen.label)
        //this.screenTransition.transitionIn();
    }

    endTransitionInTo(screen) {
        //console.log("endTransitionInTo", screen.label)
    }
    endTransitionOutTo(screen, nextScreen) {
        //console.log("endTransitionOutTo", screen.label, nextScreen.label)
    }


    update(delta) {

        super.update(delta * this.timeScale);


    }


    resize(newSize, innerResolution) {
        super.resize(newSize, innerResolution);

    }
}