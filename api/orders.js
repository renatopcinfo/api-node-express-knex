module.exports = (app) => {

  const get = (req, res) => {
      app.db('pedidos')
          .then((pedidos) => res.status(200).json(pedidos))
          .catch(err => res.status(500).json(err))
  }

  const save = (req, res) => {
      const pedido = req.body
      console.log(pedido)
      app.db('pedidos')
          .insert(pedido)
          .then((data) => res.status(201).json(data))
          .catch(err => res.status(500).json(err))
  }

  const getById = (req, res) => {
      const id = req.params.id

      app.db('pedidos')
          .where({id: id})
          .first()
          .then(pedido => res.status(200).json(pedido))
      
  }

  const put = (req, res) => {
      const id = req.params.id
      const pedido = req.body

      app.db('pedidos')
          .update(pedido)
          .where({id: id})
          .then((data) => res.status(200).json(data))
          .catch(err => res.status(500).json(err))
  }

  const remove = async (req, res) => {
      const id = req.params.id
      try {
          const register = await app.db('pedidos')
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