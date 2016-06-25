import Point from '../point'
import Hex from '../hex'

export default {
    // http://www.redblobgames.com/grids/hexagons/implementation.html#orgheadline12
    parallelogram(width, height) {
        const hexes = []
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                hexes.push(Hex(x, y))
            }
        }
        return hexes
    },

    // http://www.redblobgames.com/grids/hexagons/implementation.html#orgheadline13
    triangle(start, side) {
        const hexes = []

        for (let x = 0; x < side; x++) {
            for (let y = 0; y < side - x; y++) {
                hexes.push(Hex(x, y).add(Point(start)))
            }
        }

        return hexes
    },

    // http://www.redblobgames.com/grids/hexagons/implementation.html#orgheadline14
    hexagon(center, radius) {
        const hexes = []
        // radius includes the center hex
        radius -= 1

        for (let x = -radius; x <= radius; x++) {
            const startY = Math.max(-radius, -x - radius)
            const endY = Math.min(radius, -x + radius)

            for (let y = startY; y <= endY; y++) {
                hexes.push(Hex(x, y).add(Point(center)))
            }
        }

        return hexes
    },

    // http://www.redblobgames.com/grids/hexagons/implementation.html#orgheadline15
    rectangle(topLeft, width, height) {
        const hexes = []

        for (let y = 0; y < height; y++) {
            const yOffset = Math.floor(y / 2)

            for (let x = -yOffset; x < width - yOffset; x++) {
                hexes.push(Hex(x, y).add(Point(topLeft)))
            }
        }

        return hexes
    }
}
