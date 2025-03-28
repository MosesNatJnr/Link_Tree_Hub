import User from "../models/user.js"

export const addLink =async(req,res)=>{
    const {id} =req
    const {title, url, description} = req.body
    try {
        if(!title || !description || !url){
            return res.status(400).json({ message: "All fields are required" });
        } 
        const user = await User.findByIdAndUpdate(id, {
            $push: { links: { title, url, description } }
        }, { new: true }).select("-password")
        if(user){
        res.json({message: "link added successfully"})
    } else {
        res.status(404).json({ message: "User not found" });
 }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const deleteLink =async(req,res)=>{
    const {id} =req
    const {title} = req.params
    try {
        if(!title){
            return res.status(400).json({ message: "Title is required" });
        }
        const user = await User.findByIdAndUpdate(id, {
            $pull: { links: { title } }
        }, { new: true }).select("-password")
        if(user){
        res.json({message: "link deleted successfully"})
        } else {
        res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
