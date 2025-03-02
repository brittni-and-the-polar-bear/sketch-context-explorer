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

import {
    CanvasScreen,
    CanvasScreenConfig, Color,
    Context,
    Coordinate,
    GeometryStyle,
    GraphicsContext, P5Context,
    Point,
    Random
} from "@batpb/genart";
import P5Lib from "p5";

export class PointScreen extends CanvasScreen {
    #points: Point[] = [];

    public constructor(config: CanvasScreenConfig) {
        super(config);
        this.#buildPoints(this.GRAPHICS_HANDLER.getActiveContext());
    }

    public override drawToGraphics(context: GraphicsContext): void {
        context.GRAPHICS.background(255);
        this.#points.forEach((p: Point): void => {
            p.render(context);
        });
    }

    public override keyPressed(): void {
        const p5: P5Lib = P5Context.p5;
        if (p5.key === 's') {
            this.saveAllGraphics();
        }
    }

    #buildPoints(context: Context): void {
        for (let i: number = 0; i < 100; i++) {
            const b: boolean = Random.randomBoolean();
            let c: Color = new Color(255, 0, 0);

            if (b) {
                c = new Color(0, 0, 255);
            }

            const style: GeometryStyle = new GeometryStyle(
                null,
                c
            );
            style.strokeMultiplier = 10;

            const x: number = Random.randomFloat(this.minX, this.maxX);
            const y: number = Random.randomFloat(this.minY, this.maxY);
            const p: Point = new Point({
                POSITION: new Coordinate(x, y, context),
                CONTEXT: context,
                STYLE: style
            });
            this.#points.push(p);
            this.addRedrawListener(p);
        }
    }
}
