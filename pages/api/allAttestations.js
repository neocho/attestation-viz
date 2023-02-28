// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const dataRes = await fetch(
      `https://api.n.xyz/api/v1/dapp/attestationstation/Attestations?apikey=${process.env.NXYZ_API_KEY}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const dataResParsed = await dataRes.json();

    if (dataRes.status === 200) {
      res.status(200).json({ data: dataResParsed });
    } else {
      throw new Error("Unable to fetch creator attestation data! Try again later!");
    }
  } catch (e) {
    res.status(500).send({ error: e.messsage });
  }
}
