export function checkTodosBodyMiddleware(req,res,next)
{
    if(req.method === "POST")
    {
        const body = req.body;
        const userId = req.query.userId;

        if(!body.id)
        {
            res.statusCode = 401;
            res.end("ID is not found");
            return;
        }

        if(!body.title)
        {
            res.statusCode = 401;
            res.end("Title is not found");
            return;
        }

        if(!body.completed)
        {
            res.statusCode = 401;
            res.end("status is not found");
            return;
        }

        if(!userId || typeof userId !== "number")
        {
            res.statusCode = 401;
            res.end("userid is either not found or invalid");
            return;
        }

        next();
    }
}