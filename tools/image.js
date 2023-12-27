import { pixiManifest } from '@assetpack/plugin-manifest';
import { pixiTexturePacker } from '@assetpack/plugin-texture-packer';

export default {
    entry: './raw-assets',
    output: './public/',
    cache: false,
    plugins: {
        texture: pixiTexturePacker({
            texturePacker: {
                removeFileExtension: true,
                allowRotation: true
            },
        }),
        manifest: pixiManifest({
            output: './src/manifest/assets-manifest.json'
        }),
    },
};