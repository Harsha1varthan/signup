const zod = require('zod')

const UserValidate = zod.object({
    user: zod.string(),
    password: zod.string()
})

module.exports = {
    UserValidate
}