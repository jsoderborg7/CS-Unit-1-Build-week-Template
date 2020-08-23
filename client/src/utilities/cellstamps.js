const stamps = [
    {name: 'Static: Block',
    width: 2,
    height: 2,
    map: [ 
            1, 1,
            1, 1]
    },
    {name: 'Static: Beehive',
    width: 4,
    height: 3,
    map: [
        0, 1, 1, 0,
        1, 0, 0, 1,
        0, 1, 1, 0,]
    },
    {name: 'Static: Loaf',
    width: 4,
    height: 4,
    map: [ 
        0, 1, 1, 0,
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 0]
    },
    {name: 'Static: Boat',
    width: 3,
    height: 3,
    map: [ 
        1, 1, 0,
        1, 0, 1,
        0, 1, 0]
    },
    {name: 'Static: Tub',
    width: 3,
    height: 3,
    map: [
        0, 1, 0,
        1, 0, 1,
        0, 1, 0]
    },
    {name: 'Oscillator: Blinker',
    width: 3,
    height: 1,
    map: [
        1, 1, 1]
    },
    {name: 'Oscillator: Toad',
    width: 4,
    height: 2,
    map: [
        0, 1, 1, 1,
        1, 1, 1, 0]
    },
    {name: 'Oscillator: Beacon',
    width: 4,
    height: 4,
    map: [
        1, 1, 0, 0,
        1, 1, 0, 0,
        0, 0, 1, 1,
        0, 0, 1, 1]
    },
    {name: 'Oscillator: Pulsar',
    width: 13,
    height: 13,
    map: [
        0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0] 
    },
    {name: 'Oscillator: Pentadecathlon',
    width: 3,
    height: 16,
    map: [
        0, 1, 0,
        0, 1, 0,
        0, 0, 0,
        0, 1, 0,
        1, 0, 1,
        0, 0, 0,
        1, 1, 1,
        0, 0, 0,
        0, 0, 0,
        1, 1, 1,
        0, 0, 0,
        1, 0, 1,
        0, 1, 0,
        0, 0, 0,
        0, 1, 0,
        0, 1, 0] 
    },
    {name: 'Spaceship: Glider',
    width: 3,
    height: 3,
    map: [
        1, 0, 1,
        0, 1, 1,
        0, 1, 0] 
    },
    {name: 'Spaceship: Lightweight',
    width: 5,
    height: 4,
    map: [
        0, 0, 1, 1, 0,
        1, 1, 0, 1, 1,
        1, 1, 1, 1, 0,
        0, 1, 1, 0, 0] 
    },
    {name: 'Spaceship: Middleweight',
    width: 6,
    height: 5,
    map: [
        0, 0, 0, 1, 0, 0,
        0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 0] 
    },
    {name: 'Spaceship: Heavyweight',
    width: 7,
    height: 5,
    map: [
        0, 0, 0, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0] 
    },
    {name: 'Custom: Smiley',
    width: 7,
    height: 5,
    map: [
        0, 1, 1, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1] 
    },
    {name: 'Custom: Blinker Bomb',
    width: 5,
    height: 5,
    map: [
        0, 0, 1, 0, 0,
        0, 1, 0, 1, 0,
        1, 0, 0, 0, 1,
        0, 1, 0, 1, 0,
        0, 0, 1, 0, 0] 
    },
    {name: 'Custom: Big Blinker Bomb',
    width: 7,
    height: 7,
    map: [
        0, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 0, 1, 0,
        1, 0, 0, 0, 1, 0, 1,
        1, 0, 0, 1, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 1,
        0, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 0, 0] 
    },
]
export default stamps