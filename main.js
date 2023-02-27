const {Client, MessageEmbed} = require('discord.js');
const bot = new Client();
 
const token = 'NzQxNjEzNzQzMjA4NjYxMDU5.Xy6Hng._X1MXk7rSGUj4huK09FwNjaWGBs';
 
const PREFIX = '/';
 
bot.on('ready', () =>{
    console.log('GalaxyBot esta en linea!');
    bot.user.setActivity("Code neutr0 #ad ❤️"); 
    bot.user.setGame("Developing Bots");
});
 
bot.on('message', message=>{
    
    let args = message.content.slice(PREFIX.length).split(' ');
    
 
    switch (args[0]){ 
        case 'ayuda':
            const embed = new MessageEmbed()
            .setTitle('Galaxy Bot')
            .setThumbnail('https://www.hoyfortnite.com/images/skins/Galaxy%20Scout_2.png')
            .setColor(0x8700FF)
            .addField("**Comandos**", value= ".")
            .addField("\n\n/ayuda", value= "Consulta todo sobre GalaxyBot")
            .addField("\n/info", value="Informacion GalaxyBot")
            .addField("\n/comandos", value="Comandos GalaxyBot")
            .addField("\n/invitame", value="Invita GalaxyBot a tu servidor")
            .addField("\n\n**Fortnite**", value= ".")
            .addField("\n\n/shop", value= "Para ver la tienda diaria")
            .addField("\n/brnews", value="Para ver las novedades de fortnite battle royale")
            .addField("\n/creativenews", value="Para ver las novedades de creativo")
            .addField("\n/stwnews", value="Para ver las novedades de salvar el mundo")
            .addField("\n/newitems", value="Para ver los items leakeados")
            .setFooter('By neutr0 & gomashio | Code neutr0 #ad ❤️')
            message.author.send(embed);
        break;
    
    
    }
 
 
});

bot.on('message', message=>{
    
    let args = message.content.slice(PREFIX.length).split(' ');
    
 
    switch (args[0]){ 
        case 'info':
            const embed = new MessageEmbed()
            .setTitle('Galaxy Bot info')
            .setThumbnail('https://www.hoyfortnite.com/images/skins/Galaxy%20Scout_2.png')
            .setColor(0x8700FF)
            .addField("HECHO POR ``neutr0#0012`` y ``gomashio#4335``", value="--------------------------------------------------------")
            .addField(name="Invitame", value="[discord.com/GalaxyBot](https://discord.com/api/oauth2/authorize?client_id=741613743208661059&permissions=8&scope=bot 'discord.com')")
            .addField("\n-Como Ser VIP" , value="Para ser VIP\n-Tienes que **donarme 5€ por PayPal**\no\n-Comprarte algo **de 2000 pavos con el codigo neutr0**")
            .addField("\nVentajas VIP" , value="```Ser VIP te dara un monton de ventajas como ser siempre el primero en iniciar tu bot,Tener un bot siempre preparado para iniciar,extender la duracion de tu bot durante 3 horas.Quitar todos los anuncios a los bots y que vayan sin lag y sin delay.)```")
            .setFooter('By neutr0 & gomashio | Code neutr0 #ad ❤️')
            message.author.send(embed);
        break;
    
    
    }
 
 
});

bot.on('message', message=>{
    
    let args = message.content.slice(PREFIX.length).split(' ');
    
 
    switch (args[0]){ 
        case 'comandos':
            const embed = new MessageEmbed()
            .setTitle('Galaxy Bot')
            .setThumbnail('https://www.hoyfortnite.com/images/skins/Galaxy%20Scout_2.png')
            .setColor(0x8700FF)
            .addField("**COMANDOS BOTS FOTNITE**", value= ".")
            .addField("\n\n -Para Las Skins", value= "Para poner la skin que querais poneis su nombre en (Español o Ingles) y se pone automaticamente")
            .addField("\n-Para Los Estilos", value="Para cambiar el estilo de la skin del bot poneis ( style skin ) y os saldran varios estilos (SI LA SKIN TIENE ESTILOS) vosotros elejis un estilo y se lo pone")
            .addField("\n-Para Los Bailes", value="Para que baile poneis el emote que querais y lo baila automatico")
            .addField("\n-Para El Nivel", value="Para cambiar el nivel de el bot poneis ( level ) y el nivel que querais (ejemplo ) level 822")
            .setFooter('By neutr0 & gomashio | Code neutr0 #ad ❤️')
            message.author.send(embed);
        break;
    
    
    }
 
 
});

bot.on('message', message=>{
    
    let args = message.content.slice(PREFIX.length).split(' ');
    
 
    switch (args[0]){ 
        case 'invitame':
            const embed = new MessageEmbed()
            .setTitle('Galaxy Bot')
            .setThumbnail('https://www.hoyfortnite.com/images/skins/Galaxy%20Scout_2.png')
            .setColor(0x8700FF)
            .addField("**INVITAME A TU SERVIDOR O UNETE AL NUESTRO**")
            .addField("\n\nUnete a nuestro servidor", value="[discord.com/neutr0](https://discord.gg/ZbWY34v 'discord.com')")
            .addField(name="Invitame a tu servidor", value="[discord.com/GalaxyBot](https://discord.com/api/oauth2/authorize?client_id=741613743208661059&permissions=8&scope=bot 'discord.com')")
            .setFooter('By neutr0 & gomashio | Code neutr0 #ad ❤️')
            message.author.send(embed);
        break;
    
    
    }
 
 
});


                        
bot.login(token);