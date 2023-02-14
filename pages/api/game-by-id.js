export default function handler(req, res){
    const id = req.query.id;
    const games = [
        {
            id: "1",
            title: "The Last of us",
            picture: "/assets/lastOfUs.jfif",
            developer: "Naughty Dog",
            summary: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.",
            linkToPurchase:"https://www.amazon.co.uk/Last-Us-Remastered-PS4-Arabic/dp/B00LWRSJB2"
        },
        {
            id: "2",
            title: "Final Fantasy XII",
            picture: "/assets/FFXII.jfif",
            developer: "Square Enix",
            summary: "Final Fantasy XII is a role-playing video game developed and published by Square Enix. The twelfth main installment of the Final Fantasy series, it was first released for the PlayStation 2 in 2006. It introduced several innovations to the series: an open world; a seamless battle system; a controllable camera; a customizable 'gambit' system, which lets the player control the artificial intelligence (AI) of characters in battle; a 'license' system, which determines what abilities and equipment can be used by characters; and hunting side quests, which allows the player to find and defeat increasingly difficult monsters in the game's open world. Final Fantasy XII also includes elements from previous games in the series, such as Chocobos and Moogles.",
            linkToPurchase:"https://www.amazon.co.uk/Square-Enix-Final-Fantasy-XII/dp/B000WH39X6"
        },
        {
            id: "3",
            title: "Overcooked",
            picture: "/assets/Overcooked.jpg",
            developer:"Ghost Town Games",
            summary: "Overcooked (stylised as Overcooked!) is a 2016 cooking simulation video game developed by Ghost Town Games and published by Team17. In a local cooperative experience, players control a number of chefs in kitchens filled with various obstacles and hazards to rapidly prepare meals to specific orders under a time limit. The game was released for Microsoft Windows, PlayStation 4, and Xbox One in August 2016. A Nintendo Switch version was released in July 2017.",
            linkToPurchase:"https://www.amazon.co.uk/Overcooked-All-You-Can-Eat/dp/B08WTXWC1R"
        },
        {
            id: "4",
            title: "Brothers: A Tale of Two Sons",
            picture: "/assets/Brothers.jfif",
            developer: "Starbreeze Studios",
            summary: "Brothers: A Tale of Two Sons is a 2013 adventure game developed by Starbreeze Studios and published by 505 Games for Xbox 360, Microsoft Windows, PlayStation 3, PlayStation 4, Xbox One, iOS, Android, Windows Phone, Nintendo Switch, and Amazon Luna. The narrative takes place in a fantasy world filled with fictitious creatures such as orcs and trolls, where two young brothers set out on a journey to find a cure for their father's illness. The game is often mentioned an example of artistry in video games due to its heavy narrative. It has sold more than 800,000 copies as of January 2015.",
            linkToPurchase:"https://www.amazon.co.uk/Brothers-Tale-Two-Sons-PS4/dp/B011EX96UQ"
        }
    
    ];
    const foundGame = games.find((game) => {
        if (game.id === id){
            return true // if it finds a book with the value it returns it
        } else {
            return false // if not, it will go again until it finds true.
        }
    })
    res.json({game: foundGame});
}