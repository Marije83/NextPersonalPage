import sql from "@/utils/postgres";

export default async function handler(req, res){

    const games = await sql`
        select * from games
        order by likes desc
    `;

    res.json(games);
}