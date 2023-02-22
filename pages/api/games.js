import sql from "@/utils/postgres";

export default async function handler(req, res){

    const games = await sql`
        select * from games
        order by id asc
    `;

    res.json(games);
}