export async function POST(req) {
    const { password } = await req.json();

    if (!password || password !== process.env.AUTH_PASSWORD) {
        return new Response(JSON.stringify({ error: 'Unauthorized access. Invalid password.' }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: 'Authentication successful.' }), { status: 200 });
}