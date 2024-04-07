export const checkSuperAdminArbitrary = (req,res, next) => {
    try {
        const authHeader = req.headers['access-admin']
        if(authHeader === process.env.ADMIN) {
            next()
        }
        else {
            res.status(400).send({MensajeAdmin: "No se pudo procesar esta peticion, no eres admin"})
        }
    } catch (error) {
        res.status(500).send({MensajeAdmin: "Ha ocurrido un error " + error})
    }
}