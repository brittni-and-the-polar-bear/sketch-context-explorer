/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's sketch context explorer project,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * The visual outputs of this source code are licensed under the
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
 * You should have received a copy of the CC BY-NC-ND 4.0 License with this program.
 * See OUTPUT-LICENSE or go to https://creativecommons.org/licenses/by-nc-nd/4.0/
 * for full license details.
 */

import P5Lib from 'p5';
import {
    ASPECT_RATIOS,
    AspectRatio,
    Canvas,
    CanvasScreenConfig, GraphicsContext,
    P5Context, ScreenConfigBuilder
} from '@batpb/genart';

import { SketchScreen } from './sketch-screen';

import '../../assets/styles/sketch.css';
import {PointScreen} from "./point-screen";

// TODO - GraphicsContext and CanvasContext
// TODO - changing Canvas resolution at runtime
// TODO - changing GraphicsContext aspectRatio at runtime
// TODO - changing GraphicsContext resolution at runtime
// TODO - switching between GraphicsContexts at runtime
// TODO - matching Canvas aspect ratio to window with constant GraphicsContext
// TODO - matching Canvas aspect ratio to window with matching GraphicsContext

const p5: P5Lib = P5Context.p5;

p5.setup = (): void => {
    Canvas.buildCanvas(ASPECT_RATIOS.SQUARE, 720, p5.P2D, 'sketch-context-canvas', false, true);

    const screen: SketchScreen = new SketchScreen(buildSketchScreen());
    Canvas.addScreen(screen);

    const pointScreen: PointScreen = new PointScreen(buildPointScreen());
    Canvas.addScreen(pointScreen);
    Canvas.currentScreen = pointScreen.NAME;
};

p5.draw = (): void => {
    Canvas.draw();
};

p5.windowResized = (): void => {
    Canvas.resize();
};

p5.keyPressed = (): void => {
    if (p5.key === '1') {
        const ratio: AspectRatio = new AspectRatio(ASPECT_RATIOS.SQUARE);
        Canvas.updateAspectRatio(ratio);
    } else if (p5.key === '2') {
        const ratio: AspectRatio = new AspectRatio(ASPECT_RATIOS.SOCIAL_VIDEO);
        Canvas.updateAspectRatio(ratio);
    } else if (p5.key === '3') {
        const ratio: AspectRatio = new AspectRatio(ASPECT_RATIOS.WIDESCREEN);
        Canvas.updateAspectRatio(ratio);
    } else if (p5.key === '0') {
        Canvas.updateResolution(1080);
    } else if (p5.key === '9') {
        Canvas.updateResolution(720);
    } else if (p5.key === '8') {
        Canvas.updateResolution(2160);
    }

    Canvas.keyPressed();
};

function buildSketchScreen(): CanvasScreenConfig {
    const builder: ScreenConfigBuilder = new ScreenConfigBuilder();
    builder.setName('sketch-screen')
        .setActiveGraphics({
            NAME: 'sketch-graphics',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.SQUARE),
            RESOLUTION: 1080
        })
        .addGraphics({
            NAME: 'sketch-graphics-2',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.SOCIAL_VIDEO),
            RESOLUTION: 1080
        })
        .addGraphics({
            NAME: 'sketch-graphics-3',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.WIDESCREEN),
            RESOLUTION: 1080
        });

    return builder.build() ?? {
        NAME: 'default-screen',
        ACTIVE_GRAPHICS: new GraphicsContext({NAME: 'default-graphics'})
    };
}

function buildPointScreen(): CanvasScreenConfig {
    const builder: ScreenConfigBuilder = new ScreenConfigBuilder();
    builder.setName('point-screen')
        .setActiveGraphics({
            NAME: 'point-graphics',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.SQUARE),
            RESOLUTION: 1080
        })
        .addGraphics({
            NAME: 'point-graphics_social',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.SOCIAL_VIDEO),
            RESOLUTION: 1080
        })
        .addGraphics({
            NAME: 'point-graphics_widescreen',
            ASPECT_RATIO: new AspectRatio(ASPECT_RATIOS.WIDESCREEN),
            RESOLUTION: 1080
        });

    return builder.build() ?? {
        NAME: 'default-screen',
        ACTIVE_GRAPHICS: new GraphicsContext({NAME: 'default-graphics'})
    };
}
