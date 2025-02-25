import P5Lib from 'p5';

import { Canvas, CanvasScreen, CanvasScreenConfig, P5Context } from '@batpb/genart';

export class SketchScreen extends CanvasScreen {  
    public constructor(config: CanvasScreenConfig) {
        super(config);
    }

    public override drawToGraphics(graphics: P5Lib.Graphics): void {
        const p5: P5Lib = P5Context.p5;
        graphics.fill(0, 0, 190);
        graphics.strokeWeight(Canvas.defaultStrokeWeight);
        graphics.stroke(0);
        const size: number = Canvas.defaultStrokeWeight;
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
