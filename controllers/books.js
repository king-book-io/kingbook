const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Book = require("../models/Book");

exports.getAll = catchAsync(async (req, res, next) => {
    const books = await Book.find({ type: req.query.type }).lean();

    res.status(200).json({
        success: true,
        data: books,
    });
});

exports.get = catchAsync(async (req, res, next) => {
    const book = await Book.findById(req.params.id).lean();

    if (!book) return next(new AppError(404, "Not Found"));

    res.status(200).json({
        success: true,
        data: book,
    });
});

exports.create = catchAsync(async (req, res, next) => {
    const book = await Book.create(req.body);

    res.status(201).json({
        success: true,
        data: book,
    });
});

exports.update = catchAsync(async (req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    }).lean();

    if (!book) return next(new AppError(404, "Not Found"));

    res.status(200).json({
        success: true,
        data: book,
    });
});

exports.delete = catchAsync(async (req, res, next) => {
    await Book.findById(req.params.id);
    res.status(204).json({
        success: true,
        data: null,
    });
});
