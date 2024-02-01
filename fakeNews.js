
        // Arrays with different elements
        const headlines = ["Breaking News", "Exclusive Report", "Shocking Discovery","Citywide Panic Ensues",
  "Historical Artifacts Come Alive",
  "Government Conspiracy Unearthed",
  "Mysterious Phenomenon Grips KC",
  "Local Legends Resurrected",
  "Secret Tunnels Discovered Under KC",
  "Time-Warping Anomalies Hit City",
  "UFO Sightings Skyrocket in KC",
  "Parallel Universe Opens in Plaza",
  "Chaos Unleashed in Downtown KC",
  "Cursed Antiques Haunt Local Shops",
  "Parallel Dimensions Collide in KC",
  "Mayor Reveals Shocking Secrets",
  "Cryptic Symbols Appear Across City",
  "Gateway to Another Realm Discovered",
  "Haunted Landmarks Come Alive","Kansas City Under Alien Siege",
  "Secret Tunnels Connect KC's Past and Future",
  "Time-Traveling Portal Discovered in Plaza Fountain",
  "Haunted BBQ Joints Terrify Locals",
  "Underground Cult's Influence Spreads in KC",
  "City Center Shrouded in Mysterious Fog",
  "Bizarre Crop Circles Appear in KC Suburbs",
  "Famous KC Statues Come to Life at Midnight",
  "Local Mascots Declare Independence",
  "Jazz Legends Return for One Night Concert",
  "Street Art Animates Across the City",
  "Mysterious Symbols Unlock Hidden Dimensions",
  "KC Skyline Altered by Supernatural Forces",
  "Haunted Libraries Whisper Forgotten Stories",
  "Legends of the Kansas City Underground Railroad Resurface",
  "Famous KC Fountains Flow with Otherworldly Waters",
  "Power & Light District Hosts Intergalactic Festival",
  "Ghostly Apparitions Haunt KC Museums",
  "River Market Vendors Sell Cursed Artifacts",
  "Paranormal Activity Peaks in KC Homes",
  "Historic Buildings Reveal Time Capsule Secrets",
  "Alien Abductions Reported in Westport",
  "Cryptic Messages Discovered in Street Murals",
  "Local Animals Display Psychic Abilities",
  "Famous KC BBQ Sauce Causes Time Distortion",
  "Jazz District Echoes with Supernatural Melodies",
  "Kansas City Zoo Animals Communicate Telepathically",
  "Crossroads Arts District Transforms into Parallel Universe",
  "Union Station's Clocks Stopped by Time Travelers",
  "KC Royals' World Series Trophies Gain Sentience"];
        const subjects = ["Scientists", "Government Officials", "Journalists","Historical Preservationists",
  "Local Historians",
  "Urban Explorers",
  "Paranormal Investigators",
  "Ghost Tour Guides",
  "Architectural Scholars",
  "Antique Collectors",
  "Occult Enthusiasts"];
        const actions = ["reveal", "announce", "discover"];
        const quotes = ["We never expected this", "It's a game-changer", "The world will never be the same","The city holds its breath", "A new chapter for Kansas City", "The heartbeat of the Midwest", "A symphony of revelations", "Echoes of the past reverberate", "The skyline tells a different story", "A journey through time and space", "Unraveling the mysteries beneath the surface"];
        const locations = ["in Kansas City", "in Overland Park", "in Lenexa","in Westport","in the Country Club Plaza", "in the Power & Light District", "in Brookside", "at Kauffman Stadium", "at Arrowhead Stadium", "in the Crossroads Arts District", "in the River Market"];
        const outcomes = ["world peace", "mass hysteria", "a new era","a cultural renaissance", "technological advancements", "an era of enlightenment", "a surge in creativity", "a wave of innovation", "a harmonious coexistence", "a flourishing arts scene", "a surge in local pride"];
        const sources = ["anonymous sources", "reliable insiders", "unnamed officials"];
        const dates = ["today", "yesterday", "last week"];
        
        // Additional arrays for zombie-themed content
        const zombieActions = ["rise from the dead", "walk among us", "stir in their graves", "haunt the living","rise from the ashes",
  "shuffle through the streets",
  "wander aimlessly",
  "moan eerily in unison",
  "gnash their teeth",
  "claw at the air",
  "haunt every corner",
  "cast ominous shadows",
  "emerge from the fog",
  "lurk in the shadows",
  "stalk the unsuspecting",
  "congregate in hordes",
  "echo chilling cries",
  "pursue the living relentlessly",
  "embrace the darkness",
  "roam the city streets"];
        const graveActions = ["empty graves", "disturbing resting places", "unearthing graves","empty graves silently",
  "disturb resting places discreetly",
  "unearth ancient tombs cautiously",
  "awaken long-forgotten spirits",
  "whisper secrets from below",
  "echo with mysterious echoes",
  "radiate an eerie glow",
  "release ancient energies",
  "shudder with unearthly vibrations",
  "spark supernatural occurrences",
  "stir with cryptic vibrations",
  "awake with spectral whispers",
  "reveal hidden chambers mysteriously",
  "cradle the secrets of the past",
  "whisper tales of forgotten times",
  "harbor the spirits of yesteryear"];

        // Function to generate fake news
        function generateFakeNews() {
            const headline = headlines[Math.floor(Math.random() * headlines.length)];
            const subject = subjects[Math.floor(Math.random() * subjects.length)];
            const action = actions[Math.floor(Math.random() * actions.length)];
            const quote = quotes[Math.floor(Math.random() * quotes.length)];
            const location = locations[Math.floor(Math.random() * locations.length)];
            const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
            const source = sources[Math.floor(Math.random() * sources.length)];
            const date = dates[Math.floor(Math.random() * dates.length)];
            const zombieAction = zombieActions[Math.floor(Math.random() * zombieActions.length)];
            const graveAction = graveActions[Math.floor(Math.random() * graveActions.length)];

            const fakeNewsArticle = `
                <h2>${headline}</h2>
                <p>${subject} ${action} ${quote}. They made the discovery ${location}, leading to ${outcome}. According to ${source}, this groundbreaking news was unveiled ${date}. Meanwhile, reports suggest an underground organization is ${graveAction} to ${zombieAction}.</p>
            `;

        
            return fakeNewsArticle;
        }

        // Generate multiple fake news when the page loads
        window.onload = function() {
            const container = document.getElementById('fakeNewsContainer');

            for (let i = 0; i < 6; i++) {
                const fakeNewsArticle = document.createElement('div');
                fakeNewsArticle.className = 'newspaper-article';
                fakeNewsArticle.innerHTML = generateFakeNews(); // Append generated HTML

                container.appendChild(fakeNewsArticle);
            }
        };