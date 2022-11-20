import db from "../../../utils/db/config.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    console.log("req: ", req.body.cellNumber);
    console.log("dafuq");
    try {
        // console.log("req body: ", body.req);
        const { cellNumber } = req.body;

        const entries = await db.collection("customers").get();
        const entriesData = entries.docs.map((entry) => entry.data());

        if (entriesData.some((entry) => entry.cellNumber === cellNumber)) {
            res.status(200).json({ message: "Number Already exists" });
        } else {
            const { id } = await db.collection("customers").add({
                ...req.body,
                created: new Date().toISOString(),
            });
            res.status(201).json({ id });
        }
        // res.status(200).json({ message: entriesData });
    } catch (e) {
        res.status(400).json({ errorMessage: e });
    }
};
