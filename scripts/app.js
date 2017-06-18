/**
 * Created by matanbenmoshe on 16/06/2017.
 */

$(".all-relative-class").hover(function () {
    $(this).children(".curved-text").stop().fadeIn(250);
    $(this).addClass("brighter");
    var planetHovered = $(this).attr("class").split(" ")[0];
    $(".planet-heading").stop().html(planetHovered + "'s Orbit").fadeIn(250);
}, function () {
    $(this).children(".curved-text").stop().fadeOut(250);
    $(this).removeClass("brighter");
    $(".planet-heading").stop().fadeOut(250);
}).on('click', function () {
    var planetPressed = $(this).attr("class").split(" ")[0];
    infoDetails = planetsData[planetPressed];
    fillInfoSection(infoDetails, planetPressed);
    $(".info").fadeIn(250);
});

var infoDetails;

$(".moon-label").on('click', function () {
    event.stopPropagation();
    var planetPressed = 'moon';
    infoDetails = planetsData[planetPressed];
    fillInfoSection(infoDetails, planetPressed);
    $(".info").fadeIn(250);
});

function fillInfoSection(infoDetails, planetName) {
    $(".info img").attr("src", infoDetails.img)
    $(".info .info-body").text(infoDetails.info);
    $(".info .planet-name").text(planetName);
    $(".info .wikipedia-link a").attr("href", infoDetails.wikiUrl);
    $(".info .planet").text(planetName);
}

$(".info-x").on('click', function () {
    $(".info").fadeOut(250);
});

var planetsData = {
    sun: {
        img: "https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg",
        info: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,[13][14] with internal convective motion that generates a magnetic field via a dynamo process.[15] It is by far the most important source of energy for life on Earth. Its diameter is about 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System.[16] About three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron",
        wikiUrl: "https://en.wikipedia.org/wiki/sun"
    },
    mercury: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1920px-Mercury_in_color_-_Prockter07-edit1.jpg",
        info: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth.",
        wikiUrl: "https://en.wikipedia.org/wiki/mercury"
    },
    venus: {
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        info: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6, bright enough to cast shadows at night and, though rare, occasionally be visible in broad daylight.",
        wikiUrl: "https://en.wikipedia.org/wiki/venus"
    },
    earth: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1920px-The_Earth_seen_from_Apollo_17.jpg",
        info: "Earth (from Old English: Eorðe; Greek: Γαῖα Gaia;[n 5] Latin: Terra[25]), otherwise known as the World[n 6] or the Globe, is the third planet from the Sun and the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets.According to radiometric dating and other sources of evidence, Earth formed about 4.54 billion years ago.[27][28][29] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. ",
        wikiUrl: "https://en.wikipedia.org/wiki/Earth"
    },
    moon: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1920px-FullMoon2010.jpg",
        info: "    The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). Following Jupiter's satellite Io, the Moon is second-densest satellite among those whose densities are known.",
        wikiUrl: "https://en.wikipedia.org/wiki/Moon"
    },
    mars: {
        img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the \"Red Planet\"[13][14] because the iron oxide prevalent on its surface gives it a reddish appearance.[15] Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
        wikiUrl: "https://en.wikipedia.org/wiki/Mars"
    },
    jupiter: {
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity.[12] The Romans named it after their god Jupiter.",
        wikiUrl: "https://en.wikipedia.org/wiki/jupiter"
    },
    saturn: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/2880px-Saturn_during_Equinox.jpg",
        info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.[11][12] Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive.[13][14][15] Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.",
        wikiUrl: "https://en.wikipedia.org/wiki/saturn"
    },
    neptune: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1920px-Neptune_Full.jpg",
        info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[d] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.",
        wikiUrl: "https://en.wikipedia.org/wiki/neptune"
    },
    uranus: {
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        info: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons.",
        wikiUrl: "https://en.wikipedia.org/wiki/uranus"
    }
};
