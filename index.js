import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";

const welcomeFlow = addKeyword('hola').addAnswer('hola bienvenido')
const provider = createProvider(BaileysProvider)
provider.initHttpServer(3002)
provider.http?.server.post('/send-message', handleCtx(async (bot,req,res)=>{
 await bot.sendMessage('5493813019603' , 'mensaje' ,{})
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