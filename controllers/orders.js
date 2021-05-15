const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Note = require("../models/Note");

exports.getAll = catchAsync(async (req, res, next) => {
    const notes = await Note.find().lean();

    res.status(200).json({
        success: true,
        data: notes,
    });
});

exports.get = catchAsync(async (req, res, next) => {
    const note = await Note.findById(req.params.id).lean();

    if (!note) return next(new AppError(404, errors.NOT_FOUND));

    res.status(200).json({
        success: true,
        data: note,
    });
});

exports.create = catchAsync(async (req, res, next) => {
    const note = await Note.create({
        ...req.body,
        date: new Date().toLocaleString("en-UZ", {
            timeZone: "Asia/Tashkent",
        }),
    });

    res.status(201).json({
        success: true,
        data: note,
    });
});

exports.update = catchAsync(async (req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    }).lean();

    if (!note) return next(new AppError(404, errors.NOT_FOUND));

    res.status(200).json({
        success: true,
        data: note,
    });
});

exports.delete = catchAsync(async (req, res, next) => {
    await Note.findById(req.params.id);

    res.status(204).json({
        success: true,
        data: null,
    });
});
