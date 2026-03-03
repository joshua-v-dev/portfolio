import type { NextApiRequest, NextApiResponse } from "next";

type GuestbookEntry = {
  name: string;
  message: string;
  timestamp: number;
};

export const entries = new Map<string, GuestbookEntry>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ error: "Missing name or message" });
    }
    const timestamp = Date.now();
    const entry = { name, message, timestamp };
    entries.set(timestamp.toString(), entry);
    return res.status(200).json({ timestamp });
  }
  if (req.method === "GET") {
    const entriesArray = Array.from(entries.values());
    const sortedEntries = entriesArray.sort(
      (a, b) => b.timestamp - a.timestamp,
    );
    return res.status(200).json({ entries: sortedEntries });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
