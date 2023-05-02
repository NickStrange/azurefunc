module.exports = async function (context, req) {
    if (req.query.num1 && req.query.num2)
    {
        context.res = {
        // status: 200, /* Defaults to 200 */
        body: req.query.num1 * req.query.num2
        }
    }
    else{
        context.res = {
            status:400,
            body: "Pass 2 numbers num1 and num2  nicks git bbbbbbb vvvvvv ffffffffffff"
        }
    }
}