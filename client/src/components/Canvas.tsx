import React, {useState, useRef, useEffect, useCallback} from 'react'
import { css } from 'emotion'
import useScrollLock from "../utilhooks/useScrollLock"
import ICanvas from "../Interfaces/ICanvas"

type Coordinates = {
    x: number;
    y: number;  
}

const Canvas = (Props: ICanvas) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState<Coordinates | undefined>(undefined);
    useScrollLock(isPainting)

    const startPaint = useCallback((event: MouseEvent | TouchEvent) => {

        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint); 
        canvas.addEventListener('touchstart', startPaint); 
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
            canvas.removeEventListener('touchstart', startPaint);
        };
    }, [startPaint]);

    const paint = useCallback(
        (event: MouseEvent | TouchEvent ) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);
                if (mousePosition && newMousePosition) {
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
                }
            }
        },
        [isPainting, mousePosition]
    );

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        canvas.addEventListener('touchmove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
            canvas.removeEventListener('touchmove', paint);
        };
    }, [paint]);

    const exitPaint = useCallback(() => {
        setIsPainting(false);
        setMousePosition(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        canvas.addEventListener('touchend', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
            canvas.removeEventListener('touchend', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event: MouseEvent | TouchEvent): Coordinates | undefined => {
        if (!canvasRef.current) {
            return;
        }

        let mouseX = (event as TouchEvent).changedTouches ?
                    (event as TouchEvent).changedTouches[0].pageX :
                    (event as MouseEvent).pageX;
                    
        let mouseY = (event as TouchEvent).changedTouches ?
                    (event as TouchEvent).changedTouches[0].pageY :
                    (event as MouseEvent).pageY;


        const canvas: HTMLCanvasElement = canvasRef.current;
        return { x: mouseX - canvas.offsetLeft, y: mouseY - canvas.offsetTop };
    };

    const drawLine = (originalMousePosition: Coordinates, newMousePosition: Coordinates) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.strokeStyle = Props.strokeStyle;
            context.lineJoin = Props.lineJoin;
            context.lineWidth = Props.lineWidth;
            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();
            context.stroke();

            Props.addStrokes({
                strokeStyle: context.strokeStyle,
                lineJoin: context.lineJoin,
                lineWidth: context.lineWidth,
                originalX: originalMousePosition.x,
                originalY: originalMousePosition.y,
                newX: newMousePosition.x,
                newY: newMousePosition.y,
            })


        }
    };
    return (
    <canvas 
        ref={canvasRef} 
        height={Props.height} 
        width={Props.width} 
        className={css`
        display: flex;
        padding: 0px;
        margin: 10px auto;
        box-shadow: 1px 4px 6px 2px hsla(0, 0%,0%, 0.2);
        `}
    />
    );
};

Canvas.defaultProps = {
    width: window.innerWidth *.9,
    height: window.innerHeight * .70,
};

export default Canvas;