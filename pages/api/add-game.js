import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const { title, developer } = req.body;
    
    const response = await sql`
        insert into games
            (title, developer)
        values
            (${title}, ${developer})
    `;

    res.json({message: "Success"});
}