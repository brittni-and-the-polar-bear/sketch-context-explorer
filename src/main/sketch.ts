/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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

import { ASPECT_RATIOS, Canvas, P5Context } from '@batpb/genart';
import P5Lib from 'p5';

import '../../assets/styles/sketch.css';

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        P5Context.initialize(p5);
        Canvas.buildCanvas(ASPECT_RATIOS.SQUARE, 1080, p5.P2D, false, true);
    };

    p5.draw = (): void => {
        p5.background(0);
        p5.fill(255, 0, 0);
        p5.ellipse(0, 0, 200, 200);
        p5.fill(0, 0, 255);
        p5.ellipse(Canvas.context.width / 2.0, Canvas.context.height / 2.0, 200, 200);
        p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    };

    p5.keyPressed = (): void => {
    };

    p5.mousePressed = (): void => {
    };

    p5.windowResized = (): void => {
        Canvas.resize();
    };
}

new P5Lib(sketch);
