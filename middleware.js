

// middleware for parsing headers

module.exports = (req, res, next) => {
    req.result = {
        "ipaddress": req.ip,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    }
    next();
};