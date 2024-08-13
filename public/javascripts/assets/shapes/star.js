export function star(p5, x, y, radius1, raduis2, npoints) { 
    let angle = p5.TWO_PI / npoints
    let half_angle = angle/2.0

    p5.beginShape();
    let a = 0
    while (a < p5.TWO_PI) {
        let sx = x + p5.cos(a)*raduis2
        let sy = y + p5.sin(a)*raduis2
        p5.vertex(sx, sy)
        sx = x + p5.cos(a+half_angle) * radius1
        sy = y + p5.sin(a+half_angle) * radius1
        p5.vertex(sx, sy)
        a = a + angle
    }

    p5.endShape(p5.CLOSE);
}