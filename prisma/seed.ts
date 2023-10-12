import { PrismaClient, Prisma } from "@prisma/client"
import { randomUUID } from "crypto"


export const prisma = new PrismaClient()

const spendingData: Prisma.spendingCreateInput[] = [
    {
        id: randomUUID(),
        name: "Kosan",
        value: 800000,
        isCash: false,
        isOptional: false,
        interval: "monthly",
        every: 1,
        many: 1,
        type: "spend"
    },
    {
        id: randomUUID(),
        name: "Reksa Dana",
        value: 4000000,
        isCash: false,
        isOptional: false,
        interval: "monthly",
        every: 1,
        many: 1,
        type: "save"
    },
    {
        id: randomUUID(),
        name: "Angkon",
        value: 500,
        isCash: true,
        isOptional: true,
        interval: "weekly",
        many: 2,
        days: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
        ],
        type: "spend"
    },
]

async function main() {
    console.log('Start seeding ...')
    for (const spend of spendingData) {
        const spending = await prisma.spending.create({
            data: spend
        })
        console.log(`Create spend data with id : ${spend.id}`)

    }
    console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
