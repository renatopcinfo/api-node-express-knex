module.exports = (app) => {

  const get = (req, res) => {
      app.db('produtos')
          .then((produtos) => res.status(200).json(produtos))
          .catch(err => res.status(500).json(err))
  }

  const save = (req, res) => {
      const produto = req.body
      console.log(produto)
      app.db('produtos')
          .insert(produto)
          .then((data) => res.status(201).json(data))
          .catch(err => res.status(500).json(err))
  }

  const getById = (req, res) => {
      const id = req.params.id

      app.db('produtos')
          .where({id: id})
          .first()
          .then(produto => res.status(200).json(produto))
      
  }

  const put = (req, res) => {
      const id = req.params.id
      const produto = req.body

      app.db('produtos')
          .update(produto)
          .where({id: id})
          .then((data) => res.status(200).json(data))
          .catch(err => res.status(500).json(err))
  }

  const remove = async (req, res) => {
      const id = req.params.id
      try {
          const register = await app.db('produtos')
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