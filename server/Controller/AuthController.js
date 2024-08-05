import UserModel from '../Models/UserModel.js'


export const registerUser = async (req, res) => {


    const newUser = new UserModel(
        req.body
    );
    const { username } = req.body

    console.log(username)
    try {
        console.log("he passed")
        const oldUser = await UserModel.findOne({ username })
        console.log(oldUser, "nothing to show")
        if (oldUser) {
            return res.status(400).json({ message: "username is already registered" })
        }
        const user = await newUser.save()
        console.log("he save")

        res.status(200).json({ message: "user is registered successfully", user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}



export const loginUser = async(req, res) => {

    const findUser = new UserModel(
        req.body
    )
    const {username, password} = req.body;

    try {
        const user = await UserModel.findOne({username, password})

        if (user) {
            return res.status(200).json({message: "user is already registered, login successful", user})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 }