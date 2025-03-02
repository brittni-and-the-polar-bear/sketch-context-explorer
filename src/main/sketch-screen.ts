/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import { CanvasScreen, CanvasScreenConfig, GraphicsContext, P5Context } from '@batpb/genart';

export class SketchScreen extends CanvasScreen {
    public constructor(config: CanvasScreenConfig) {
        super(config);
    }

    public override drawToGraphics(context: GraphicsContext): void {
        const p5: P5Lib = P5Context.p5;
        const graphics: P5Lib.Graphics = context.GRAPHICS;
        graphics.fill(0, 0, 190);
        graphics.strokeWeight(context.defaultStrokeWeight);
        graphics.stroke(0);
        const size: number = context.defaultStrokeWeight;
        graphics.ellipse(
            p5.random(graphics.width),
            p5.random(graphics.height),
            p5.random(size * 10, size * 100),
            p5.random(size * 10, size * 100)
        );
    }

    public override publishRedraw(): void {
        super.publishRedraw();

    }
}
