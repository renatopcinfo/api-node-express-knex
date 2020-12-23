module.exports = (app) => {

    const get = (req, res) => {
        app.db('clientes')
            .then((clientes) => res.status(200).json(clientes))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
        const cliente = req.body
        console.log(cliente)
        app.db('clientes')
            .insert(cliente)
            .then((data) => res.status(201).json(data))
            .catch(err => res.status(500).json(err))
    }

    const getById = (req, res) => {
        const id = req.params.id

        app.db('clientes')
            .where({id: id})
            .first()
            .then(cliente => res.status(200).json(cliente))
        
    }

    const put = (req, res) => {
        const id = req.params.id
        const cliente = req.body

        app.db('clientes')
            .update(cliente)
            .where({id: id})
            .then((data) => res.status(200).json(data))
            .catch(err => res.status(500).json(err))
    }

    const remove = async (req, res) => {
        const id = req.params.id
        try {
            const register = await app.db('clientes')
                .where({id: id})
                .del()
            if(register) {
                res.status(204).json()
            }
        }catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    return { get, save, getById, put, remove }
}