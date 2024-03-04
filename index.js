import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";

const welcomeFlow = addKeyword('hola').addAnswer('hola bienvenido')
const provider = createProvider(BaileysProvider)
provider.initHttpServer(3002)
provider.http?.server.post('/send-message', handleCtx(async (bot,req,res)=>{
  const {number, message} = req.body
  console.log({ number, message })
  await bot.sendMessage(number, message ,{})
 res.end("end")
}))
const main = async ()=>{
  await createBot({
    flow:createFlow([]),
    database:new MemoryDB(),
    provider
  })
}

main()