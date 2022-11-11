import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  reason: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST request are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //Prepare Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDrpHh7+zuT9rfj\nub8IGtVp0wdyfknl1x/QV1KR0zEve0IcsXUy55QmE4EdUyEMI/ND4w1T0ikV76DH\nnqxkWWj3Ae0lSIOPAywkTPkOIRNRRM8kPesadkOFqmCMZF2kuDvz4aaiK/qDVQ1n\n0BBbWYdlevAo3zouXKgL5w0Rfjf2p61Ohv6SwoCqeP1ZSYquvShhrQRTVAAPkm5F\nxDme2cMoFOCIuOmtnLjMe90T4DkY5Eed/926qLMj8p4KIPQUwaMKtKcxxAok2iD4\njHQuWKOpRQKS/yuLZdZdwq/HkeDrsqDJy2J5OUqTdNFKfPAIzljT7PF11IW6cPdA\n9Px+ldKtAgMBAAECggEAEunLt9vK2jiaZYn3lhgdRVX9n4gZDfxtyRmb1CjY0PWk\n2/ZhsJkbcCZESI0ZtnE+PxZ+xS8K7X/4bifuBfc9MFzfDWKGw1hJrIzht+tvXahX\nCJLQXM/djIwdHWJC4ovdAq6mYsGCj779s/WPEoia5Z9v85UzL3HFaoB8MTQUcX9i\nwOWEjObyHhh21x++2VXrM+F/1y1a1tBKWJaoLHrUE2ITs9YxKqboFqzuVQXQ2NE4\nNgjJvX3OBJ0G/b7u80e4zGZG50Ah9PYkust2M4mKB5hGzUF09JExmn4uRLmbtL+e\neZ7eTQkQUIY4wn1iFaVhkGENgrtZ8rZBv5N0QmJfUQKBgQD4KCcY09sq6675cOv3\nPcAVcEiciKCQuLfMxCfDcPAMNmhXYhuc9LzjSO90l1DejiF/ji0TYuoU+qxPlg85\nf/hkmVEVLqHnmkwrEpFRoS5P20P8EB4pUIr/Xa57XhDIEMNDYaQ+Hwq4brhGCuq1\nwdJVY/iXiWWItk72o/AcU1b6tQKBgQDzFxBDdY22ZbDdhVSt3z+TlNEFWEHsx7Mt\nj72qIBuBzgzHrUAkOus8IjyNYP+vWuzo+zJLoYnvQwJvL3GDclIuylVineDm7Ue1\nJBRo7tqdVcOFzMjPhFwum/a9brGCL+aqtCnGHK5B/d+k0izyVkJ3QwU8dz2Mqezq\ngIW7NrVbGQKBgH+YHaotXDZwYlJNVnaUoIwlZKBfu7dN0uuNPCjIjBSrcPDlN+93\nAxwWJ1EacHFOQTkVwGWEaXmJ/kkZjhBxlSUck81BYev0sQ9Ah8miB271/bnAC9IQ\nYLe20n0KO7SyscOWk92BFoEIJOWWvWHhG6XeNjasZbFqk6VLW60kyMc1AoGBAKoc\ni68JhoALrbd3ZIjAX9dBHvykhI3UOhk6K7nv+g/eR6c8IFS6Pn+4XbN6G7N057Eq\niEnQ45vhwsRX6RHZYJWJ1jLK1OYFSlcCxp2f+LB9ofPyGNzPfUrIreRmoCXAq6Tt\nqwYOcAuSQ30t73Iu1xhqeDGWKCZVi4uXIP6gDE2RAoGBAKW3mIiAyJbxImFE95Sh\nt7H2BWoSB4Beq5r2T0RCKpVS+eCh8lxVSOOHiMSFR7rqSk4ljpQYSaztV8a21gSn\nCLXV5zVewQAd0WDKVy3VIkd5DFIXoXcJs1nA5UKZezLEj5n/cl5rIaRop1DQc9Sf\nvlQY7ZRmkOgcqFY94NYKX9CE\n-----END PRIVATE KEY-----\n"?.replace(
            /\\n/g,
            "\n"
          ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.reason, body.email, body.message]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: error.message ?? "Something went wrong" });
  }
}
