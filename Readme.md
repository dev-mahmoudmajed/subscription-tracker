
## Start the project
npx express-generator --no-view --git ./
- delete all folders bin, public, routes


## Tools Montring & Security
[arcjet](https://arcjet.com/)
[upstash](https://console.upstash.com/redis?teamid=0)
[swagger](https://swagger.io/)
[usebruno](https://www.usebruno.com/)
[]()





## Test the API Tools
[httpie](https://httpie.io/app)
[insomnia](https://insomnia.rest/)

## To Start work with project
you will create evv file called `.env.development.local` or `.env.production.local`
**have next vars**
```
PORT=""
NODE_ENV=""
DB_URI=""
JWT_SECRET=""
JWT_EXPIRES_IN=""
```
**Generate JWT_SECRET with next easy command**
`node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
