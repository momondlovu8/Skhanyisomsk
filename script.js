// Sample data representing popular games with icons
const apps = [
    {
        name: "Call of Duty: Mobile",
        description: "An action-packed multiplayer shooting game.",
        image: "images/cod-mobile.jpg",  // Main image
        icon: "images/cod-icon.png",      // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter"
    },
    {
        name: "PUBG Mobile",
        description: "Battle Royale mobile game with millions of players.",
        image: "images/pubg-mobile.jpg",  // Main image
        icon: "images/pubg-icon.png",      // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.tencent.ig"
    },
    {
        name: "Minecraft",
        description: "A game about placing blocks and going on adventures.",
        image: "images/minecraft.jpg",  // Main image
        icon: "images/minecraft-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
    },
    {
        name: "Among Us",
        description: "A multiplayer game of teamwork and betrayal.",
        image: "images/among-us.jpg",  // Main image
        icon: "images/among-us-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia"
    },
    {
        name: "Fortnite",
        description: "Battle against others to be the last one standing.",
        image: "images/fortnite.jpg",  // Main image
        icon: "images/fortnite-icon.png", // Game icon
        downloadLink: "https://www.epicgames.com/store/en-US/p/fortnite"
    },
    {
        name: "Genshin Impact",
        description: "Open-world action RPG with a fantasy environment.",
        image: "images/genshin-impact.jpg",  // Main image
        icon: "images/genshin-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
    },
    {
        name: "Clash of Clans",
        description: "Build your village and defend it against others.",
        image: "images/clash-of-clans.jpg",  // Main image
        icon: "images/clash-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
    },
    {
        name: "Candy Crush Saga",
        description: "Match candies and complete fun levels.",
        image: "images/candy-crush.jpg",  // Main image
        icon: "images/candy-crush-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
    },
    {
        name: "Subway Surfers",
        description: "Endless running game where you dodge trains.",
        image: "images/subway-surfers.jpg",  // Main image
        icon: "images/subway-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
    },
    {
        name: "Roblox",
        description: "Create your own games and play with friends.",
        image: "images/roblox.jpg",  // Main image
        icon: "images/roblox-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client"
    },
    {
        name: "Brawl Stars",
        description: "Multiplayer online battle game.",
        image: "images/brawl-stars.jpg",  // Main image
        icon: "images/brawl-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars"
    },
    {
        name: "Temple Run 2",
        description: "Run for your life in this endless running game.",
        image: "images/temple-run-2.jpg",  // Main image
        icon: "images/temple-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.imangi.templerun2"
    },
    {
        name: "Angry Birds 2",
        description: "The sequel to the classic slingshot game.",
        image: "images/angry-birds-2.jpg",  // Main image
        icon: "images/angry-birds-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.rovio.baba"
    },
    {
        name: "Asphalt 9: Legends",
        description: "High-speed racing game with stunning graphics.",
        image: "images/asphalt-9.jpg",  // Main image
        icon: "images/asphalt-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.Glo.asphalt9"
    },
    {
        name: "Need for Speed: Most Wanted",
        description: "Race and chase through the streets.",
        image: "images/nfs-most-wanted.jpg",  // Main image
        icon: "images/nfs-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.ea.games.nfs13_row"
    },
    {
        name: "League of Legends: Wild Rift",
        description: "The mobile version of the popular MOBA game.",
        image: "images/lol-wild-rift.jpg",  // Main image
        icon: "images/lol-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift"
    },
    {
        name: "Doodle Jump",
        description: "Jump as high as you can on platforms.",
        image: "images/doodle-jump.jpg",  // Main image
        icon: "images/doodle-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.lima.doodlejump"
    },
    {
        name: "8 Ball Pool",
        description: "Play billiards against real opponents.",
        image: "images/8-ball-pool.jpg",  // Main image
        icon: "images/8-ball-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool"
    },
    {
        name: "FIFA Soccer",
        description: "Compete in soccer matches around the world.",
        image: "images/fifa-soccer.jpg",  // Main image
        icon: "images/fifa-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.ea.game.fifa14_row"
    },
    {
        name: "Harry Potter: Wizards Unite",
        description: "An augmented reality game set in the Harry Potter universe.",
        image: "images/hp-wizards-unite.jpg",  // Main image
        icon: "images/hp-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.nianticlabs.hpwu.android"
    },
    {
        name: "Words with Friends 2",
        description: "A fun word game to challenge your friends.",
        image: "images/words-with-friends.jpg",  // Main image
        icon: "images/words-icon.png", // Game icon
        downloadLink: "https://play.google.com/store/apps/details?id=com.zynga.words"
    },
    // Continue adding more games up to 100+
];

// Function to generate app cards dynamically
function displayApps(filteredApps = apps) {
    const appList = document.getElementById('app-list');
    appList.innerHTML = ''; // Clear the previous content
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name} Icon" class="app-icon">
            <img src="${app.image}" alt="${app.name}" class="app-image">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" target="_blank">Download</a>
        `;

        appList.appendChild(appCard);
    });
}

// Call the function to display all apps
displayApps();