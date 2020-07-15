const {
    ACTION_AND_ADVENTURE,
    ANIMATION,
    COMEDY,
    DRAMA,
    HORROR,
    KIDS_AND_FAMILY,
    MYSTERY_AND_SUSPENSE,
    ROMANCE,
    SCIENCE_FICTION_AND_FANTASY
} = require("./genres");
const { PG, PG_13, NR, R } = require("./ratings");

module.exports = [
    {
        id: 0,
        title: "The Lego Movie",
        year: 2014,
        rating: PG,
        genre: [ACTION_AND_ADVENTURE, ANIMATION, COMEDY, KIDS_AND_FAMILY],
        tomatoMeter: 96,
        audienceScore: 87,
        image:
            "https://resizing.flixster.com/316luaGSSPjS2NWEEaTm-f2ZQ24=/fit-in/200x296.2962962962963/v1.bTsxMTE3NzY1NTtqOzE4NTM0OzEyMDA7MTQwMDsyMTAw"
    },
    {
        id: 1,
        title: "Spider-Man: Into the Spiderverse",
        year: 2018,
        rating: PG,
        genre: [
            ACTION_AND_ADVENTURE,
            ANIMATION,
            KIDS_AND_FAMILY,
            SCIENCE_FICTION_AND_FANTASY
        ],
        tomatoMeter: 97,
        audienceScore: 93,
        image:
            "https://resizing.flixster.com/sWUFUBGIkEmU77k9wGaNSjXoyf4=/fit-in/200x296.2962962962963/v1.bTsxMjg3MjM1MDtqOzE4NTA4OzEyMDA7NjA3Mjs5MDAw"
    },
    {
        id: 2,
        title: "Meet Joe Black",
        year: 1998,
        rating: PG_13,
        genre: [DRAMA, SCIENCE_FICTION_AND_FANTASY],
        tomatoMeter: 53,
        audienceScore: 81,
        image:
            "https://resizing.flixster.com/MraEjEeCX4JQfdZtF7cTZQ9EzkA=/206x305/v1.bTsxMTIwODM2MjtqOzE4NTM0OzEyMDA7MTUzNjsyMDQ4"
    },
    {
        id: 3,
        title: "Set it up",
        year: 2018,
        rating: NR,
        genre: [COMEDY, ROMANCE],
        tomatoMeter: 92,
        audienceScore: 68,
        image:
            "https://resizing.flixster.com/3WWPGb6__AaJ45Xvh-DWXdRX5oo=/206x305/v1.bTsxMjc2NDU0MjtqOzE4NTA3OzEyMDA7MTQ4MjsxOTc2"
    },
    {
        id: 4,
        title: "Deadpool",
        year: 2016,
        rating: R,
        genre: [ACTION_AND_ADVENTURE, COMEDY, SCIENCE_FICTION_AND_FANTASY],
        tomatoMeter: 85,
        audienceScore: 90,
        image:
            "https://resizing.flixster.com/VmskreYoZewnJuFIMmYxcKde7I8=/fit-in/200x296.2962962962963/v1.bTsxMTQyMDkxNDtqOzE4NTM3OzEyMDA7MTAwMDsxNDgw"
    },
    {
        id: 5,
        title: "Upgrade",
        year: 2018,
        rating: R,
        genre: [ACTION_AND_ADVENTURE, HORROR, SCIENCE_FICTION_AND_FANTASY],
        tomatoMeter: 87,
        audienceScore: 87,
        image:
            "https://resizing.flixster.com/WL2gArp0k0tUTrD8VGt7W8dx-IM=/fit-in/200x296.2962962962963/v1.bTsxMjcwMzkxOTtqOzE4NTA3OzEyMDA7MjAyNTszMDAw"
    },
    {
        id: 6,
        title: "Predestination",
        year: 2015,
        rating: R,
        genre: [MYSTERY_AND_SUSPENSE, SCIENCE_FICTION_AND_FANTASY],
        tomatoMeter: 83,
        audienceScore: 75,
        image:
            "https://resizing.flixster.com/NRew1u0oPje1bgPxEKMj2hbga_k=/206x305/v1.bTsxMTE4MTY1MTtqOzE4NTM0OzEyMDA7NTEyOzc1NQ"
    },
    {
        id: 7,
        title: "Ex Machina",
        year: 2015,
        rating: R,
        genre: [DRAMA, MYSTERY_AND_SUSPENSE, SCIENCE_FICTION_AND_FANTASY],
        tomatoMeter: 92,
        audienceScore: 86,
        image:
            "https://resizing.flixster.com/V-Qd_whlR9f8_FFV-M7gMxGdZ6o=/fit-in/200x296.2962962962963/v1.bTsxMTE5MDkxNjtqOzE4NTM0OzEyMDA7MTM2MDsyMDE1"
    }
];
