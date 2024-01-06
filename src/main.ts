import * as PIXI from 'pixi.js';
import * as particles from '@pixi/particle-emitter'

import MainScreenManager from './screen/MainScreenManager';
import { designConfig } from './designConfig';
import { initAssets } from './assets';

/** The PixiJS app Application instance, shared across the project */
export const app = new PIXI.Application<HTMLCanvasElement>({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: 0xffff99,
});

let hasInteracted = false;

/** Set up a resize function for the app */
function resize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const minWidth = designConfig.content.width;
    const minHeight = designConfig.content.height;

    // Calculate renderer and canvas sizes based on current dimensions
    const scaleX = windowWidth < minWidth ? minWidth / windowWidth : 1;
    const scaleY = windowHeight < minHeight ? minHeight / windowHeight : 1;
    const scale = scaleX > scaleY ? scaleX : scaleY;
    const width = windowWidth * scale;
    const height = windowHeight * scale;

    // Update canvas style dimensions and scroll window up to avoid issues on mobile resize
    app.renderer.view.style.width = `${windowWidth}px`;
    app.renderer.view.style.height = `${windowHeight}px`;
    window.scrollTo(0, 0);

    // Update renderer  and navigation screens dimensions
    app.renderer.resize(width, height);
    //navigation.init();
    //navigation.resize(width, height);
}

/** Setup app and initialise assets */
async function init() {
    // Add pixi canvas element (app.view) to the document's body
    document.body.appendChild(app.view);

    // Whenever the window resizes, call the 'resize' function
    window.addEventListener('resize', resize);

    // Trigger the first resize
    resize();

    // Setup assets bundles (see assets.ts) and start up loading everything in background
    await initAssets();

    // Set the default local storage data if needed
    //storage.readyStorage();

    // Assign the universal loading screen
    //navigation.setLoadScreen(LoadScreen);

    // Change the audio mute state to the stored state
    //audio.muted(storage.getStorageItem('muted'));

    // Prepare for user interaction, and play the music on event
    document.addEventListener('pointerdown', () => {
        if (!hasInteracted) {
            // Only play audio if it hasn't already been played
            //bgm.play('audio/bubbo-bubbo-bg-music.wav');
        }

        hasInteracted = true;
    });

    // Check for visibility sate so we can mute the audio on "hidden"
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') {
            // Always mute on hidden
            //audio.muted(true);
        }
        else {
            // Only unmute if it was previously unmuted
            //audio.muted(storage.getStorageItem('muted'));
        }
    });

    // Show first screen - go straight to game if '?play' param is present in url
    // This is used for debugging
    //if (getUrlParam('play') !== null)
    //{

    await PIXI.Assets.loadBundle('images/preload', (e) => {
        console.log('progress', e)
    });
    console.log('loaded preload complete')

    await PIXI.Assets.loadBundle('default', (e) => {
        console.log('progress', e)
    });

    console.log('loaded complete')


    const test = new PIXI.Graphics().beginFill(0xFF0000).drawCircle(0, 0, 200)
    //app.stage.addChild(test)

    const test2 = PIXI.Sprite.from('bird-icon')
   // app.stage.addChild(test2)

    const screenManager = new MainScreenManager();
    app.stage.addChild(screenManager)
    // Set up the ticker
    const ticker = app.ticker;

    // Add a tick event handler
    ticker.add((delta) => {
        // Your tick event logic goes here
        // This function will be called on each frame update
        screenManager.update(delta * 0.01)
    });

    // Start the rendering loop
    ticker.start();
}

// Init everything
init();