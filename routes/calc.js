const express = require('express');
const router = express.Router();
const ExpressError = require('../expressError');

const { findMode, findMean, findMedian, validateNumsArray } = require('../helpers');

router.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        let numsAsStrings = req.query.nums.split(',');

        let nums = validateNumsArray(numsAsStrings);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        let result = {
            operation: "mean",
            result: findMean(nums)
        }

        return res.send(result);
    } catch (e) {
        return next(e);
    }
})

router.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        let numsAsStrings = req.query.nums.split(',');

        let nums = validateNumsArray(numsAsStrings);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "median",
            result: findMedian(nums)
        }

        return res.send(result);
    } catch (e) {
        return next(e)
    }
})

router.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        let numsAsStrings = req.query.nums.split(',');

        let nums = validateNumsArray(numsAsStrings);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "mode",
            result: findMode(nums)
        }

        return res.send(result);
    } catch (e) {
        return next(e);
    }
});

router.get('/all', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        let numsAsStrings = req.query.nums.split(',');

        let nums = validateNumsArray(numsAsStrings);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }

        let result = {
            operation: "all",
            mean: findMode(nums),
            median: findMedian(nums),
            mode: findMode(nums)
        };

        return res.send(result);
    } catch (e) {
        return next(e);
    }
});

module.exports = router;