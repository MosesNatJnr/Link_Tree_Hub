import User from "../models/user.js"

export const profile =async(req,res)=>{
    const {id} =req
    try {
        const user = await User.findById(id).select("-password")
        res.json(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const linkProfile =async(req,res)=>{
    const {userName} = req.params
    try {
        const user = await User.findOne({userName}).select("-password")
        console.log(user);
        res.json(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
