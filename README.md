# Try Prisma


## Section 0: What
Sample project yang digunakan untuk research sederhana mengenai apa itu prisma dan bagaimana cara penggunaanya

## Section 1: Environmen
Berikut contoh env yang digunakan
```.env
BASE_PORT=5200
MONGO_DATABASE=prisma
MONGO_HOST=localhost
MONGO_PORT=27107
MONGO_URL="http://localhost:27017/prisma"
```


## Section 2: Installation

Penginstall depedencies:

```bash
bun install
```

Inisialisasi database:
```bash
bun prisma seed
```

Cara running:

```bash
bun start
```


## Section 4: Referensi
Dari project ini terdapat beberapa referensi dan tutorial yaitu diantaranya :
- [express](https://expressjs.com/en/starter/hello-world.html)
- [zod](https://francoisbest.com/posts/2023/dotenv-is-dead?ref=dailydev) - Pengganti dotenv
- [rest-express](https://github.dev/prisma/prisma-examples/tree/latest/typescript/rest-express) - contoh project dari prisma