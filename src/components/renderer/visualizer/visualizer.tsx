import Sketch from 'react-p5';
import { useRef, useEffect, useState } from 'react';

interface Circle {
    size: number;
    maxSize: number;
    color: number[];
    fadeSpeed: number;
    growthRate: number;
    x: number; 
    y: number; 
    age: number; 
}
function WaveVisualizer({ activePad }: any) {
    const [circles, setCircles] = useState<Circle[]>([]);
    const canvasRef = useRef<any>(null); // Referencia para el canvas de Sketch

    useEffect(() => {
        if (activePad) {
            // Añadir un nuevo círculo al estado `circles` cuando se activa un pad
            setCircles(prevCircles => [
                ...prevCircles,
                {
                    size: 0,
                    maxSize: activePad.decay * 150, // Aumento de maxSize para un mayor crecimiento
                    color: [activePad.octaves * 50, 100, 200],
                    fadeSpeed: activePad.release * 2, // Reducción de la velocidad de desvanecimiento
                    growthRate: activePad.attack * 20, // Aumento de la velocidad de crecimiento
                    x: Math.random() * 180, // Posición aleatoria en el eje X
                    y: Math.random() * 230,  // Posición aleatoria en el eje Y
                    age: 0 
                }
            ]);
        }
    }, [activePad]);

    const setup = (p5: any, canvasParentRef: any) => {
        if (canvasRef.current) {
            canvasRef.current.remove(); // Elimina cualquier canvas previo
        }
        canvasRef.current = p5.createCanvas(181, 231).parent(canvasParentRef);
    };

    const draw = (p5: any) => {
        p5.background(0, 0, 0, 50); // Fondo negro con mayor transparencia para estela más visible

        // Dibujar todos los círculos y sus cuadrados
        for (let i = circles.length - 1; i >= 0; i--) {
            let circle = circles[i];

            // Dibujar los cuadrados alrededor del borde del círculo
            const numSquares = 12; // Número de cuadrados a colocar alrededor del borde del círculo
            const squareSize = 5; // Tamaño de cada cuadrado
            const radius = circle.size; // Radio del círculo

            // Dibujar los cuadrados alrededor del círculo
            for (let j = 0; j < numSquares; j++) {
                const angle = p5.TWO_PI * (j / numSquares); // Distribución uniforme alrededor del círculo
                const x = circle.x + p5.cos(angle) * radius;
                const y = circle.y + p5.sin(angle) * radius;

                // Degradar el color de los cuadrados con el tiempo
                const fadeColor = p5.color(...circle.color);
                fadeColor.setAlpha(255 - circle.size * 1.5); // Hacerlos más transparentes a medida que crecen

                p5.fill(fadeColor);
                p5.noStroke();
                p5.rect(x - squareSize / 2, y - squareSize / 2, squareSize, squareSize); // Dibuja el cuadrado
            }

            // Aumentar el tamaño del círculo basado en la edad (crece más rápido después de cierto tamaño)
            if (circle.age < 100) {
                // Crecimiento más lento al principio (cuando el círculo es pequeño)
                circle.size += circle.growthRate * 0.3; // Crecer más lento al principio
            } else {
                // Crecimiento más rápido cuando es más grande
                circle.size += circle.growthRate * 1.5;
            }

            // Desvanecer el color del círculo con el tiempo
            circle.color[2] -= circle.fadeSpeed;

            // Aumentar el tiempo de vida del círculo
            circle.age++;
        }
    };

    useEffect(() => {
        // Limpiar el canvas al desmontar el componente
        return () => {
            if (canvasRef.current) {
                canvasRef.current.remove();
                canvasRef.current = null;
            }
        };
    }, []);

    return <Sketch setup={setup} draw={draw} />;
}

export default WaveVisualizer;
