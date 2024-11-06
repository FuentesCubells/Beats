import Sketch from 'react-p5';

function WaveVisualizer({ isKickActive } : any) {
    let amplitude = 50;  // Amplitud base para la onda
    let offset = 0; // Desplazamiento para el efecto de movimiento

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(181, 231).parent(canvasParentRef);
    };

    const draw = (p5: any) => {
        // Limpiar el canvas en cada frame
        p5.background(0);

        // Configurar color y grosor de la onda
        p5.stroke(0, 255, 255);
        p5.strokeWeight(2);

        // Ajustar la amplitud según el estado de `isKickActive`
        amplitude = isKickActive ? 30 : 10;

        // Dibujar la onda desplazada hacia la derecha
        p5.beginShape();
        for (let x = 0; x < p5.width; x += 1) {
            // Mantener la onda alrededor del centro de la pantalla
            const y = p5.height / 2 + p5.sin((x + offset) * 0.15) * amplitude;
            p5.rect(x, y, 5, 5); // Dibuja "píxeles" para el efecto
        }
        p5.endShape();

        // Incrementar el desplazamiento para el efecto de movimiento
        offset += 1; // Ajusta la velocidad del desplazamiento si lo deseas
    };

    return <Sketch setup={setup} draw={draw} />;
}

export default WaveVisualizer;
