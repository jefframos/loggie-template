import { pixiManifest } from '@assetpack/plugin-manifest';
import { pixiTexturePacker } from '@assetpack/plugin-texture-packer';

export default {
    entry: './raw-assets/images/',
    output: './public/assets/',
    cache: true,
    plugins: {
        texture: pixiTexturePacker({
            texturePacker: {
                removeFileExtension: true,
                allowRotation: false
            },
        }),
        manifest: pixiManifest({
            output: './public/assets/assets-manifest.json'
        }),
    },
};