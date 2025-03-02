import P5Lib from 'p5';

import { CanvasScreen, CanvasScreenConfig, GraphicsContext, P5Context} from '@batpb/genart';

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
