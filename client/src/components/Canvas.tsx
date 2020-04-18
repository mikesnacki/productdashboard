import React, {useState, useRef, useEffect, useCallback} from 'react'
import { css } from 'emotion'
import useWindowSize from "../utilhooks/useWindowDim"
import useScrollLock from "../utilhooks/useScrollLock"

type Coordinates = {
    x: number;
    y: number;  
}

interface CanvasProps {
    width: number;
    height: number;
    color: string;
    markSize: number;
    tipStyle: CanvasLineJoin;
    event?: MouseEvent | TouchEvent
}

const Canvas = (Props: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState<Coordinates | undefined>(undefined);
    useScrollLock(isPainting)

    const startPaint = useCallback((event: any) => {

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
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    const paint = useCallback(
        (event: MouseEvent ) => {
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
        return () => {
            canvas.removeEventListener('mousemove', paint);
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
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
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
            context.strokeStyle = Props.color;
            context.lineJoin = Props.tipStyle;
            context.lineWidth = Props.markSize;
            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();
            context.stroke();
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
    height: window.innerHeight * .75,
};

export default Canvas;