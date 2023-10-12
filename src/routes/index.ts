import express from "express"
import { randomUUID } from "crypto"

import { prisma } from "../helpers/orm"

const router = express.Router()


router.get('/get-all', async (req, res) => {
    const spendings = await prisma.spending.findMany()
    res.json(spendings)
})
router.get('/get/:id', async (req, res) => {
    const { id } = req.params

    const spending = await prisma.spending
    .findUnique({
        where: {
            id: id
        }
    })

    res.json(spending)
})
router.post('/add/', async (req, res) => {
    const {
        days, every, interval, isCash, isOptional, many, name, type, value
    } = req.body

    const spending = await prisma.spending
    .create({
        data: {
            id: randomUUID(),
            days,
            every,
            interval,
            isCash,
            isOptional,
            many,
            name,
            type,
            value
        }
    })

    res.json(spending)
})

export default router;