import {NextResponse} from "next/server";

export async function GET() {
    const response = await fetch(`http://${process.env.RVC_API_HOST}:${process.env.RVC_API_PORT}/get_config`);
    const json = await response.json();

    return NextResponse.json(json);
}