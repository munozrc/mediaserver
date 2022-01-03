import { Router } from 'express'
import { getConnection } from '../database.js'

const router = new Router()

router.get('/', (_req, res) => {
  const { series } = getConnection().data
  res.send({ series })
})

export default router
