// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req);
  if (process.env.NODE_ENV === "production")
    return res.redirect("https://www.coocobolo.com");
  if (process.env.NODE_ENV === "development")
    return res.redirect("http://localhost:3000");
}
