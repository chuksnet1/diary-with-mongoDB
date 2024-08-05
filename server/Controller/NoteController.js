import noteModel from '../Models/secretNote.js'


export const postNote = async (req, res) => {

    const newUser = new noteModel(
        req.body
    );
    //const { username } = req.body

    //console.log(username)
    try {
        console.log("he passed first stage note")

        const user = await newUser.save()
        console.log("note is save")

        res.status(200).json({ message: "note is saved successfully", user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}



export const getNote = async (req, res) => {

    const {userId} = req.body
    // const id = req.params.userId;    //this is use to get id from link


    try {
        console.log(userId)
        const note = await noteModel.find({userId})
        console.log(userId, "this now")

        return res.status(200).json({ message: "note is available successful", note })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}