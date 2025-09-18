import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability, updateUserImage, getCarById, updateCar, updateBankDetails, deleteBankDetails } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-car", upload.single("image"), protect, addCar)
ownerRouter.get("/cars", protect, getOwnerCars)
ownerRouter.post("/toggle-car", protect, toggleCarAvailability)
ownerRouter.post("/delete-car", protect, deleteCar)
ownerRouter.get("/car/:id", protect, getCarById) // New route for fetching a single car
ownerRouter.put("/update-car/:id", upload.single("image"), protect, updateCar) // New route for updating a car

ownerRouter.get('/dashboard', protect, getDashboardData)
ownerRouter.post('/update-image', upload.single("image"), protect, updateUserImage)
ownerRouter.put("/bank-details", protect, updateBankDetails) // New route for updating owner bank details
ownerRouter.delete("/bank-details", protect, deleteBankDetails) // New route for deleting owner bank details

export default ownerRouter;