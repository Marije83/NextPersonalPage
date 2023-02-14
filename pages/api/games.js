export default function handler(req, res){
    const games = [
        {
            id: "1",
            title: "The Last of us",
            picture: "/assets/lastOfUs.jfif",
            developer: "Naughty Dog",
        },
        {
            id: "2",
            title: "Final Fantasy XII",
            picture: "/assets/FFXII.jfif",
            developer: "Square Enix",
        },
        {
            id: "3",
            title: "Overcooked",
            picture: "/assets/Overcooked.jpg",
            developer:"Ghost Town Games"
        },
        {
            id: "4",
            title: "Brothers: A Tale of Two Sons",
            picture: "/assets/Brothers.jfif",
            developer: "Starbreeze Studios"
        }
    
    ];

    res.json(games);
}