
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { cellNumbers } = req.query;

    const [customerPhoneNumber, businessTwilioNumber] = cellNumbers;

    // console.log(cellNumbers);

    // res.status(200).json({ data: cellNumbers });
    try {
        const convos = await db
            .collection("conversation")
            .where("customerPhoneNumber", "==", customerPhoneNumber)
            .onSnapshot();
        // .where("businessTwilioNumber", "==", businessTwilioNumber)
        // .get();

        // if (convos.docs.length > 0) {
        //     const chatsData = convos.docs.map((entry) => entry.data());

        //     res.status(200).json({ data: chatsData });
        // } else {
        //     res.status(200).json({ data: { crash: chatsData } });
        // }
        const convosData = convos.docs.map((doc) => ({
            convoId: doc.id,
            ...doc.data(),
        }));

        res.status(200).json({ data: convosData });
    } catch (e) {
        console.log("Axios Error: ", e);
        res.json({ errorMessage: e });
    }
};
