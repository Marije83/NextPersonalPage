import sql from "@/utils/postgres";

export default async function handler(req, res){
    const {name, message, email} = req.query;
    
    if (name === undefined) {
        res.status(400).json({message: "Name is required"});
    }

    if (email === undefined) {
        res.status(400).json({message: "Email is required"});
    }

    if (message === undefined) {
        res.status(400).json({message: "Message is required"})
    }


    const response = await sql`
        insert into contact_messages
            (name, message, email)
        values
            (${name}, ${message}, ${email})
    `;

    res.json({message: "success"})
}