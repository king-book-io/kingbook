const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

exports.getAll = catchAsync(async (req, res, next) => {
    const users = await User.find().lean();

    res.status(200).json({
        success: true,
        data: users,
    });
});

exports.get = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ telegram_id: req.params.id }).lean();

    if (!user) {
        return res.status(404).json({
            success: false,
            data: "NOT FOUND",
        });
    }

    res.status(200).json({
        success: true,
        data: user,
    });
});

exports.create = catchAsync(async (req, res, next) => {
    let user = await User.findOne({ telegram_id: req.body.telegram_id }).lean();

    if (!user) {
        user = await User.create(req.body);
    }

    res.status(201).json({
        success: true,
        data: user,
    });
});

exports.update = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const user = await User.findOneAndUpdate(
        { telegram_id: req.params.id },
        req.body,
        { new: true }
    ).lean();

    if (!user) return next(new AppError(404, "Not Found"));

    res.status(200).json({
        success: true,
        data: user,
    });
});

exports.delete = catchAsync(async (req, res, next) => {
    await User.findById(req.params.id);

    res.status(204).json({
        success: true,
        data: null,
    });
});
