export default function handler(req, res){
    const games = [
        {
            title: "The Last of us",
            //picture: <img src='lastOfUs.jfif' alt="The Last of Us" width="150" height ="300" />,
            picture: "/assets/lastOfUs.jfif",
            developer: "Naughty Dog",
        },
        {
            title: "Final Fantasy XII",
            //picture: <img src='FFXII.jfif' alt="Final Fantasy XII" width="150" height ="300" />,
            picture: "/assets/FFXII.jfif",
            developer: "Square Enix",
        },
        {
            title: "Overcooked",
            //picture: <img src='Overcooked.jpg' alt="Overcooked" width="150" height ="300"/>,
            picture: "/assets/Overcooked.jpg",
            developer:"Ghost Town Games"
        },
        {
            title: "Brothers: A Tale of Two Sons",
            //picture: <img src='Brothers.jfif' alt="Brothers" width="150" height ="300"/>,
            picture: "/assets/Brothers.jfif",
            developer: "Starbreeze Studios"
        }
    
    ];

    res.json(games);
}