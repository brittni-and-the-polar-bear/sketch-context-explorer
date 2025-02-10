import P5Lib from 'p5';

import { Canvas, CanvasScreen, CanvasScreenConfig, P5Context } from '@batpb/genart';

export class SketchScreen extends CanvasScreen {
    #redrawn: boolean = false;
    
    public constructor(config: CanvasScreenConfig) {
        super(config);
    }

    public override drawToGraphics(graphics: P5Lib.Graphics): void {
        const p5: P5Lib = P5Context.p5;
        // graphics.background(0);
        graphics.fill(0, 0, 190);
        // graphics.noStroke();
        graphics.strokeWeight(Canvas.defaultStrokeWeight);
        graphics.stroke(0);
        graphics.ellipse(p5.random(graphics.width), p5.random(graphics.height), p5.random(10, 25), p5.random(10, 25));
    
        if (this.#redrawn) {
            graphics.stroke(255);
            graphics.strokeWeight(Canvas.defaultStrokeWeight * 5);
            graphics.line(0, 0, graphics.width, graphics.height);
        }
    }

    public override publishRedraw(): void {
        super.publishRedraw();
        this.#redrawn = true;
    }
}
