export default function handler(req, res){
    const games = [
        {
            title: "The Last of us",
            picture: "/assets/lastOfUs.jfif",
            developer: "Naughty Dog",
        },
        {
            title: "Final Fantasy XII",
            picture: "/assets/FFXII.jfif",
            developer: "Square Enix",
        },
        {
            title: "Overcooked",
            picture: "/assets/Overcooked.jpg",
            developer:"Ghost Town Games"
        },
        {
            title: "Brothers: A Tale of Two Sons",
            picture: "/assets/Brothers.jfif",
            developer: "Starbreeze Studios"
        }
    
    ];

    res.json(games);
}