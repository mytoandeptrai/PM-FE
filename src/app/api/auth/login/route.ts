export async function POST(request: Request) {
  const body = await request.json();
  console.log('🚀 ~ POST ~ body:', body);
  return Response.json(body, {
    status: 200,
  });
}
