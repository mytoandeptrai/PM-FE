import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const accessToken = body.accessToken;
  const username = body.username;

  if (!accessToken) {
    return Response.json(
      { message: 'There is no token' },
      {
        status: 400,
      }
    );
  }

  return new NextResponse(body, {
    status: 200,
    headers: { 'Set-Cookie': `accessToken=${accessToken}; sameSite=strict; httpOnly=true; maxAge=60*60` },
  });
}
